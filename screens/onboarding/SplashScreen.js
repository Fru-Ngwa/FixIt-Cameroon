import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local image - replace assets/images/photo1.png with your splash background
const BACKGROUND_IMAGE = require('../../assets/images/splash1.jpg');

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
      <View style={styles.overlay} />
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.logoSection}>
          <View style={styles.logoCircle}>
            <Ionicons name="people" size={36} color={COLORS.white} />
          </View>
          <Text style={styles.appName}>FixItCameroon</Text>
          <Text style={styles.tagline}>Together, we build{'\n'}a better Cameroon.</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Onboarding1')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.secondaryButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.guestText}>Continue as Guest</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: COLORS.dark },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(11,31,23,0.75)' },
  container: { flex: 1, justifyContent: 'space-between', padding: SPACING.lg, paddingBottom: SPACING.xl },
  logoSection: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: RADIUS.pill,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  appName: { color: COLORS.white, fontSize: 24, fontWeight: '700' },
  tagline: { color: '#D8E5DE', fontSize: 14, textAlign: 'center', marginTop: SPACING.sm },
  actions: { gap: SPACING.sm },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
  guestText: { color: '#D8E5DE', textAlign: 'center', fontSize: 13, marginTop: SPACING.xs },
});