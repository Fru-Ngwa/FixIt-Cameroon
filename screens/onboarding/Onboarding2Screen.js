import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local image - replace assets/images/photo3.png with your illustration
const IMAGE = require('../../assets/images/two.png');

export default function Onboarding2Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={22} color={COLORS.text} />
      </TouchableOpacity>

      <Image source={IMAGE} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>Track Progress</Text>
        <Text style={styles.description}>
          Track real-time progress and stay updated on resolutions.
        </Text>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Onboarding3')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  backButton: { padding: SPACING.md },
  image: { width: '100%', height: 260, resizeMode: 'cover' },
  content: { flex: 1, padding: SPACING.lg, justifyContent: 'flex-end' },
  title: { fontSize: 22, fontWeight: '700', color: COLORS.text, marginBottom: SPACING.sm },
  description: { fontSize: 14, color: COLORS.textMuted, lineHeight: 20, marginBottom: SPACING.lg },
  dots: { flexDirection: 'row', gap: 6, marginBottom: SPACING.lg },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.border },
  dotActive: { backgroundColor: COLORS.primary, width: 20 },
  nextButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextButtonText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
});