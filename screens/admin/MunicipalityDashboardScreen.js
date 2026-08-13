import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';


const OVERVIEW = [
  { id: '1', label: 'Reported', value: 247, color: COLORS.text },
  { id: '2', label: 'In Progress', value: 65, color: COLORS.warning },
  { id: '3', label: 'Resolved', value: 158, color: COLORS.primary },
];

const AVG_RESOLUTION_DAYS = 4.2;

const RECENT_ISSUES = [
  {
    id: '1',
    title: 'Large pothole on Molyko Rd',
    time: 'Today, 10:30 AM',
    severity: 'High',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  },
];

const TABS = ['Dashboard', 'Issues', 'Reports', 'Users', 'More'];

export default function MunicipalityDashboardScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Municipality Dashboard</Text>
        <Ionicons name="ellipsis-vertical" size={18} color={COLORS.text} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Overview (This Month)</Text>
        <View style={styles.overviewRow}>
          {OVERVIEW.map((item) => (
            <View key={item.id} style={styles.overviewCard}>
              <Text style={[styles.overviewValue, { color: item.color }]}>{item.value}</Text>
              <Text style={styles.overviewLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.avgCard}>
          <Text style={styles.avgLabel}>Avg. Resolution Time</Text>
          <Text style={styles.avgValue}>{AVG_RESOLUTION_DAYS} days</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.sectionLabel}>Recent Issues</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {RECENT_ISSUES.map((issue) => (
          <View key={issue.id} style={styles.issueCard}>
            <Image source={{ uri: issue.image }} style={styles.issueImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.issueTitle}>{issue.title}</Text>
              <Text style={styles.issueTime}>{issue.time}</Text>
            </View>
            <View style={styles.severityBadge}>
              <Text style={styles.severityText}>{issue.severity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} style={styles.tabBarItem}>
            <Text style={styles.tabBarText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
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
  content: { padding: SPACING.md, paddingBottom: SPACING.xl },
  sectionLabel: { fontSize: 13, color: COLORS.textMuted, marginBottom: SPACING.sm },
  overviewRow: { flexDirection: 'row', gap: SPACING.sm, marginBottom: SPACING.md },
  overviewCard: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    alignItems: 'center',
  },
  overviewValue: { fontSize: 20, fontWeight: '700' },
  overviewLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: 4 },
  avgCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  avgLabel: { fontSize: 12, color: COLORS.textMuted },
  avgValue: { fontSize: 18, fontWeight: '700', color: COLORS.text, marginTop: 2 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  viewAll: { fontSize: 12, color: COLORS.primary, fontWeight: '600' },
  issueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    marginTop: SPACING.sm,
  },
  issueImage: { width: 56, height: 56, borderRadius: RADIUS.sm, marginRight: SPACING.sm },
  issueTitle: { fontSize: 13, fontWeight: '600', color: COLORS.text },
  issueTime: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  severityBadge: {
    backgroundColor: '#FDECEC',
    borderRadius: RADIUS.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  severityText: { fontSize: 11, color: COLORS.danger, fontWeight: '600' },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.card,
    paddingVertical: SPACING.sm,
  },
  content: {
    padding: SPACING.md,
    paddingTop: SPACING.xl,
  },
  tabBarItem: { alignItems: 'center' },
  tabBarText: { fontSize: 11, color: COLORS.textMuted },
});