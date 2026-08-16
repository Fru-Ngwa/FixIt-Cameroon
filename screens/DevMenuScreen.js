import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

const SECTIONS = [
  {
    title: 'Reporting Flow',
    screens: [
      'ReportIssueStep1',
      'ReportIssueStep2',
      'ReportIssueStep3',
      'DuplicateCheck',
      'SubmissionSuccess',
    ],
  },
  {
    title: 'Resolution & Community Action',
    screens: ['CommunityAction', 'MissionDetails', 'ResolutionUpdate', 'VerifyResolution'],
  },
  {
    title: 'Profile & Community',
    screens: ['Profile', 'Leaderboard'],
  },
  {
    title: 'Admin / Municipal Dashboard',
    screens: ['MunicipalityDashboard'],
  },
  {
    title: 'Additional Screens',
    screens: [
      'MyReports',
      'Notifications',
      'Comments',
      'Bookmarks',
      'Sponsors',
      'Organizations',
      'Analytics',
    ],
  },
];

export default function DevMenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Dev Menu</Text>

        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.screens.map((name) => (
              <TouchableOpacity
                key={name}
                style={styles.button}
                onPress={() => navigation.navigate(name)}
              >
                <Text style={styles.buttonText}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xl },
  title: { fontSize: 22, fontWeight: '700', marginBottom: SPACING.lg, color: COLORS.text },
  section: { marginBottom: SPACING.lg },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    marginBottom: SPACING.sm,
  },
  button: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  buttonText: { color: COLORS.text, fontWeight: '600' },
});