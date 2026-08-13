import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';



const USER = {
  name: 'Jean Tchanda',
  location: 'Buea, Cameroon',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  reported: 12,
  resolved: 27,
  upvotes: 45,
};

const MENU_ITEMS = [
  { id: '1', icon: 'document-text-outline', label: 'My Reports' },
  { id: '2', icon: 'flag-outline', label: 'My Missions' },
  { id: '3', icon: 'bookmark-outline', label: 'My Bookmarks' },
  { id: '4', icon: 'people-outline', label: 'Following' },
  { id: '5', icon: 'settings-outline', label: 'Settings' },
];

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <Image source={{ uri: USER.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{USER.name}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color={COLORS.textMuted} />
            <Text style={styles.location}>{USER.location}</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{USER.reported}</Text>
            <Text style={styles.statLabel}>Reported</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{USER.resolved}</Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{USER.upvotes}</Text>
            <Text style={styles.statLabel}>Upvotes</Text>
          </View>
        </View>

        <View style={styles.menu}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuRow}>
              <Ionicons name={item.icon} size={20} color={COLORS.text} />
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={18} color={COLORS.textMuted} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
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
  content: { padding: SPACING.md },
  profileCard: { alignItems: 'center', marginBottom: SPACING.lg },
  avatar: { width: 84, height: 84, borderRadius: RADIUS.pill, marginBottom: SPACING.sm },
  name: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  location: { fontSize: 13, color: COLORS.textMuted, marginLeft: 4 },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  statBox: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  statLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  menu: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  content: {
    padding: SPACING.md,
    paddingTop: SPACING.xl,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuLabel: { flex: 1, marginLeft: SPACING.md, fontSize: 14, color: COLORS.text },
});