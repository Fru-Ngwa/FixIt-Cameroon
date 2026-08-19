import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const ORGANIZATIONS = [
  { id: '1', name: 'Green Buea Association', type: 'NGO', members: 124 },
  { id: '2', name: 'Buea Youth Volunteers', type: 'Community Group', members: 88 },
  { id: '3', name: 'Molyko Residents Assoc.', type: 'Community Group', members: 56 },
];

export default function OrganizationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Organizations</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {ORGANIZATIONS.map((org) => (
          <TouchableOpacity key={org.id} style={styles.row}>
            <View style={styles.iconWrap}>
              <Ionicons name="people-outline" size={20} color={COLORS.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{org.name}</Text>
              <Text style={styles.meta}>{org.type} · {org.members} members</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  content: { padding: SPACING.md },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.pill,
    backgroundColor: '#E7F3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  name: { fontSize: 13, fontWeight: '600', color: COLORS.text },
  meta: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
});