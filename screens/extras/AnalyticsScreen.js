import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const WEEKLY_REPORTS = [
  { day: 'Mon', value: 12 },
  { day: 'Tue', value: 18 },
  { day: 'Wed', value: 9 },
  { day: 'Thu', value: 22 },
  { day: 'Fri', value: 15 },
  { day: 'Sat', value: 27 },
  { day: 'Sun', value: 20 },
];

const TOP_CATEGORIES = [
  { id: '1', name: 'Roads', percent: 43 },
  { id: '2', name: 'Waste', percent: 26 },
  { id: '3', name: 'Streetlights', percent: 18 },
  { id: '4', name: 'Drainage', percent: 13 },
];

const MAX_VALUE = Math.max(...WEEKLY_REPORTS.map((d) => d.value));

export default function AnalyticsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analytics</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Reports (This Month)</Text>
        <View style={styles.chartCard}>
          <View style={styles.chartRow}>
            {WEEKLY_REPORTS.map((item) => (
              <View key={item.day} style={styles.barColumn}>
                <View
                  style={[
                    styles.bar,
                    { height: (item.value / MAX_VALUE) * 90 },
                  ]}
                />
                <Text style={styles.barLabel}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.sectionLabel}>Top Categories</Text>
        <View style={styles.card}>
          {TOP_CATEGORIES.map((cat) => (
            <View key={cat.id} style={styles.categoryRow}>
              <Text style={styles.categoryName}>{cat.name}</Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${cat.percent}%` }]} />
              </View>
              <Text style={styles.categoryPercent}>{cat.percent}%</Text>
            </View>
          ))}
        </View>
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
  sectionLabel: { fontSize: 13, color: COLORS.textMuted, marginBottom: SPACING.sm },
  chartCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  chartRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 120 },
  barColumn: { alignItems: 'center', flex: 1 },
  bar: { width: 14, backgroundColor: COLORS.primary, borderRadius: RADIUS.sm },
  barLabel: { fontSize: 10, color: COLORS.textMuted, marginTop: SPACING.xs },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
  },
  categoryRow: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.sm },
  categoryName: { width: 90, fontSize: 12, color: COLORS.text, fontWeight: '500' },
  progressTrack: { flex: 1, height: 8, backgroundColor: COLORS.border, borderRadius: RADIUS.pill, marginHorizontal: SPACING.sm },
  progressFill: { height: 8, backgroundColor: COLORS.primary, borderRadius: RADIUS.pill },
  categoryPercent: { width: 34, fontSize: 12, color: COLORS.textMuted, textAlign: 'right' },
});