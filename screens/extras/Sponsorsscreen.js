import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const RECENT_SPONSORS = [
  { id: '1', name: 'MTN Cameroon', type: 'Sponsored cleanup', time: '2hrs ago', icon: 'business-outline' },
  { id: '2', name: 'Orange Cameroon', type: 'Sponsored equipment', time: '1 day ago', icon: 'business-outline' },
];

export default function SponsorsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sponsors</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.banner}>
          <Ionicons name="leaf-outline" size={28} color={COLORS.white} />
          <Text style={styles.bannerTitle}>Support a better Cameroon</Text>
          <Text style={styles.bannerSubtitle}>
            Sponsor issues and missions in your community.
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Become a Sponsor</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionLabel}>Recent Sponsors</Text>
        {RECENT_SPONSORS.map((sponsor) => (
          <View key={sponsor.id} style={styles.row}>
            <View style={styles.iconWrap}>
              <Ionicons name={sponsor.icon} size={20} color={COLORS.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{sponsor.name}</Text>
              <Text style={styles.type}>{sponsor.type}</Text>
            </View>
            <Text style={styles.time}>{sponsor.time}</Text>
          </View>
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
  banner: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  bannerTitle: { color: COLORS.white, fontSize: 17, fontWeight: '700', marginTop: SPACING.sm },
  bannerSubtitle: { color: '#DCEFE2', fontSize: 12, textAlign: 'center', marginTop: 4, marginBottom: SPACING.md },
  bannerButton: { backgroundColor: COLORS.white, borderRadius: RADIUS.pill, paddingHorizontal: SPACING.lg, paddingVertical: 10 },
  bannerButtonText: { color: COLORS.primary, fontWeight: '700', fontSize: 13 },
  sectionLabel: { fontSize: 13, color: COLORS.textMuted, marginBottom: SPACING.sm },
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
  type: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  time: { fontSize: 11, color: COLORS.textMuted },
});