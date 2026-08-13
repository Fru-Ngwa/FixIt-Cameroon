import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';


const MISSION = {
  title: 'Clean Molyko Road',
  category: 'Community Cleanup',
  organizer: 'Green Buea Association',
  date: 'Sat, 18 May 2025',
  time: '08:00 AM',
  meetingPoint: 'University of Buea Gate',
  volunteers: 24,
  sponsors: 3,
  going: 12,
  image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800',
};

export default function MissionDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mission Details</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: MISSION.image }} style={styles.image} />

        <Text style={styles.title}>{MISSION.title}</Text>
        <Text style={styles.category}>{MISSION.category}</Text>

        <Text style={styles.sectionLabel}>Organized by</Text>
        <Text style={styles.value}>{MISSION.organizer}</Text>

        <View style={styles.row}>
          <Ionicons name="calendar-outline" size={16} color={COLORS.textMuted} />
          <Text style={styles.rowText}>
            {MISSION.date} · {MISSION.time}
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={16} color={COLORS.textMuted} />
          <Text style={styles.rowText}>Meeting Point: {MISSION.meetingPoint}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{MISSION.volunteers}</Text>
            <Text style={styles.statLabel}>Volunteers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{MISSION.sponsors}</Text>
            <Text style={styles.statLabel}>Sponsors</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{MISSION.going}</Text>
            <Text style={styles.statLabel}>Going</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.goingButton}>
          <Text style={styles.goingButtonText}>I'm Going</Text>
        </TouchableOpacity>
      </ScrollView>
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
  content: { padding: SPACING.md },
  image: { width: '100%', height: 180, borderRadius: RADIUS.md, marginBottom: SPACING.md },
  title: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  category: { fontSize: 13, color: COLORS.primary, marginBottom: SPACING.md },
  sectionLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: SPACING.sm },
  value: { fontSize: 14, color: COLORS.text, fontWeight: '500', marginBottom: SPACING.sm },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.xs },
  rowText: { marginLeft: SPACING.sm, fontSize: 13, color: COLORS.textMuted },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginTop: SPACING.lg,
  },
  statBox: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  statLabel: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
  goingButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  content: {
    padding: SPACING.md,
    paddingTop: SPACING.xl,
  },
  goingButtonText: { color: COLORS.white, fontWeight: '600', fontSize: 15 },
});