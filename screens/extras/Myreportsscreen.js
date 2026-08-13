import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const TABS = ['All', 'Open', 'Resolved'];

const REPORTS = [
  {
    id: '1',
    title: 'Large pothole on Molyko Rd',
    category: 'Roads',
    status: 'Reported',
    date: 'Today, 10:30 AM',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  },
  {
    id: '2',
    title: 'Broken streetlight',
    category: 'Streetlights',
    status: 'In Progress',
    date: 'Yesterday, 6:15 PM',
    image: 'https://images.unsplash.com/photo-1517583698236-d4a41f5b0a7f?w=800',
  },
  {
    id: '3',
    title: 'Overflowing waste bin',
    category: 'Waste',
    status: 'Resolved',
    date: '3 days ago',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800',
  },
];

const STATUS_COLORS = {
  Reported: { bg: '#FDECEC', text: COLORS.danger },
  'In Progress': { bg: '#FEF3E2', text: COLORS.warning },
  Resolved: { bg: '#E7F3EB', text: COLORS.primary },
};

export default function MyReportsScreen({ navigation }) {
  const [tab, setTab] = useState('All');

  const filtered =
    tab === 'All'
      ? REPORTS
      : REPORTS.filter((r) =>
          tab === 'Open' ? r.status !== 'Resolved' : r.status === 'Resolved'
        );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Reports</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.tabs}>
        {TABS.map((t) => (
          <TouchableOpacity key={t} style={[styles.tab, tab === t && styles.tabActive]} onPress={() => setTab(t)}>
            <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {filtered.map((report) => {
          const statusStyle = STATUS_COLORS[report.status];
          return (
            <TouchableOpacity key={report.id} style={styles.card}>
              <Image source={{ uri: report.image }} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{report.title}</Text>
                <Text style={styles.meta}>{report.category} · {report.date}</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: statusStyle.bg }]}>
                <Text style={[styles.badgeText, { color: statusStyle.text }]}>{report.status}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
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
  tabs: { flexDirection: 'row', margin: SPACING.md, backgroundColor: COLORS.card, borderRadius: RADIUS.pill, padding: 4 },
  tab: { flex: 1, paddingVertical: 8, borderRadius: RADIUS.pill, alignItems: 'center' },
  tabActive: { backgroundColor: COLORS.primary },
  tabText: { fontSize: 13, color: COLORS.textMuted, fontWeight: '600' },
  tabTextActive: { color: COLORS.white },
  content: { paddingHorizontal: SPACING.md, paddingTop: SPACING.sm },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  image: { width: 56, height: 56, borderRadius: RADIUS.sm, marginRight: SPACING.sm },
  title: { fontSize: 13, fontWeight: '600', color: COLORS.text },
  meta: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  badge: { borderRadius: RADIUS.pill, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 11, fontWeight: '600' },
});