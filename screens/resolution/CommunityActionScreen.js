import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const ACTIONS = [
  { id: '1', icon: 'people-outline', title: 'I can help (Volunteer)', target: 'MissionDetails' },
  { id: '2', icon: 'hammer-outline', title: 'I have materials / equipment', target: null },
  { id: '3', icon: 'cash-outline', title: 'I can sponsor this issue', target: 'Sponsors' },
  { id: '4', icon: 'business-outline', title: 'I represent an organization', target: 'Organizations' },
];

export default function CommunityActionScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community Action</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.intro}>This issue can be resolved with community help.</Text>
        <Text style={styles.subIntro}>Help your community better.</Text>

        {ACTIONS.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={styles.actionRow}
            onPress={() => action.target && navigation.navigate(action.target)}
          >
            <View style={styles.iconWrap}>
              <Ionicons name={action.icon} size={20} color={COLORS.primary} />
            </View>
            <Text style={styles.actionText}>{action.title}</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.howItWorks}>
          <Text style={styles.howItWorksText}>How it works?</Text>
        </TouchableOpacity>
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
  intro: { fontSize: 15, fontWeight: '600', color: COLORS.text, marginBottom: SPACING.xs },
  subIntro: { fontSize: 13, color: COLORS.textMuted, marginBottom: SPACING.lg },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.pill,
    backgroundColor: '#E7F3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  actionText: { flex: 1, fontSize: 14, color: COLORS.text, fontWeight: '500' },
  howItWorks: { alignSelf: 'center', marginTop: SPACING.lg },
  howItWorksText: { color: COLORS.primary, fontWeight: '600', fontSize: 13 },
});