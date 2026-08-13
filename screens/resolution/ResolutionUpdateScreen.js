import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';


const TIMELINE = [
  { id: '1', title: 'Work started', date: '18 May 2026, 08:15 AM', done: true },
  { id: '2', title: 'Before photo', date: '18 May 2026, 08:20 AM', done: true },
  { id: '3', title: 'After photo', date: '18 May 2026, 10:30 AM', done: true },
  { id: '4', title: 'Awaiting verification', date: '18 May 2026, 11:35 AM', done: false },
];

export default function ResolutionUpdateScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Resolution Update</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {TIMELINE.map((item, index) => (
          <View key={item.id} style={styles.timelineRow}>
            <View style={styles.timelineIndicator}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: item.done ? COLORS.primary : COLORS.border },
                ]}
              >
                {item.done && (
                  <Ionicons name="checkmark" size={12} color={COLORS.white} />
                )}
              </View>
              {index < TIMELINE.length - 1 && <View style={styles.line} />}
            </View>
            <View style={styles.timelineContent}>
              <Text
                style={[
                  styles.timelineTitle,
                  { color: item.done ? COLORS.text : COLORS.textMuted },
                ]}
              >
                {item.title}
              </Text>
              <Text style={styles.timelineDate}>{item.date}</Text>
            </View>
          </View>
        ))}
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
  timelineRow: { flexDirection: 'row' },
  timelineIndicator: { alignItems: 'center', width: 28 },
  dot: {
    width: 20,
    height: 20,
    borderRadius: RADIUS.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: SPACING.md,
    paddingTop: SPACING.xl,
  },
  line: { width: 2, flex: 1, backgroundColor: COLORS.border, marginVertical: 2 },
  timelineContent: { flex: 1, paddingBottom: SPACING.lg, marginLeft: SPACING.sm },
  timelineTitle: { fontSize: 14, fontWeight: '600' },
  timelineDate: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
});