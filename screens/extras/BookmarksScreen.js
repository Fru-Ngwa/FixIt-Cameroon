import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const TABS = ['Issues', 'Missions'];

const BOOKMARKS = [
  {
    id: '1',
    title: 'Large pothole on Molyko Rd',
    meta: 'Roads · Buea',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  },
  {
    id: '2',
    title: 'Broken streetlight',
    meta: 'Streetlights · Dsschang',
    image: 'https://images.unsplash.com/photo-1517583698236-d4a41f5b0a7f?w=800',
  },
  {
    id: '3',
    title: 'Overflowing waste bin',
    meta: 'Waste · Buea',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800',
  },
];

export default function BookmarksScreen({ navigation }) {
  const [tab, setTab] = useState('Issues');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bookmarks</Text>
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
        {tab === 'Issues' ? (
          BOOKMARKS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.meta}>{item.meta}</Text>
              </View>
              <Ionicons name="bookmark" size={18} color={COLORS.primary} />
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="flag-outline" size={32} color={COLORS.textMuted} />
            <Text style={styles.emptyText}>No saved missions yet</Text>
          </View>
        )}
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
  content: { paddingHorizontal: SPACING.md },
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
  emptyState: { alignItems: 'center', marginTop: SPACING.xl },
  emptyText: { fontSize: 13, color: COLORS.textMuted, marginTop: SPACING.sm },
});