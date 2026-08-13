import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, RADIUS } from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';



const SCREENS = [
  'CommunityAction',
  'MissionDetails',
  'ResolutionUpdate',
  'VerifyResolution',
  'Profile',
  'Leaderboard',
  'MunicipalityDashboard',
];

export default function DevMenuScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dev Menu</Text>
      {SCREENS.map((name) => (
        <TouchableOpacity
          key={name}
          style={styles.button}
          onPress={() => navigation.navigate(name)}
        >
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: SPACING.lg, paddingTop: 60 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: SPACING.lg, color: COLORS.text },
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