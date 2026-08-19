import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local images - replace assets/images/photo15.png through photo19.png with avatars
const LEADERS = [
  { id: '1', name: 'Jean Tchanda', points: 890, avatar: require('../../assets/images/p1.jpg') },
  { id: '2', name: 'Sarah M.', points: 730, avatar: require('../../assets/images/p2.jpg') },
  { id: '3', name: 'Green Buea Assoc.', points: 610, avatar: require('../../assets/images/p3.jpg') },
  { id: '4', name: 'Mike B.', points: 540, avatar: require('../../assets/images/p4.jpg') },
  { id: '5', name: 'John K.', points: 420, avatar: require('../../assets/images/p5.jpg') },
];

export default function LeaderboardScreen() {
  const [tab, setTab] = useState('month'); // 'month' | 'all'

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, tab === 'month' && styles.tabActive]}
          onPress={() => setTab('month')}
        >
          <Text style={[styles.tabText, tab === 'month' && styles.tabTextActive]}>This Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'all' && styles.tabActive]}
          onPress={() => setTab('all')}
        >
          <Text style={[styles.tabText, tab === 'all' && styles.tabTextActive]}>All Time</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {LEADERS.map((leader, index) => (
          <View key={leader.id} style={styles.row}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Image source={leader.avatar} style={styles.avatar} />
            <Text style={styles.name}>{leader.name}</Text>
            <Text style={styles.points}>{leader.points} pts</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewAllText}>View Full Leaderboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  rank: { width: 24, fontSize: 14, fontWeight: '700', color: COLORS.text },
  avatar: { width: 36, height: 36, borderRadius: RADIUS.pill, marginRight: SPACING.sm },
  name: { flex: 1, fontSize: 14, color: COLORS.text, fontWeight: '500' },
  points: { fontSize: 13, color: COLORS.primary, fontWeight: '600' },
  viewAll: { alignSelf: 'center', marginVertical: SPACING.md },
  viewAllText: { color: COLORS.primary, fontWeight: '600', fontSize: 13 },
});