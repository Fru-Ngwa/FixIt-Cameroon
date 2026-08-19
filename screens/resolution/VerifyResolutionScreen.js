import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local images - replace assets/images/photo12.png and photo13.png with before/after photos
const BEFORE_IMAGE = require('../../assets/images/pothole.jpg');
const AFTER_IMAGE = require('../../assets/images/road.jpg');

export default function VerifyResolutionScreen({ navigation }) {
  const [answer, setAnswer] = useState(null); // 'yes' | 'no' | 'unsure'

  const handleAnswer = (value) => {
    setAnswer(value);
    if (value === 'yes' || value === 'no') {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify Resolution</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.photosRow}>
          <View style={styles.photoWrap}>
            <Image source={BEFORE_IMAGE} style={styles.photo} />
            <Text style={styles.photoLabel}>Before</Text>
          </View>
          <View style={styles.photoWrap}>
            <Image source={AFTER_IMAGE} style={styles.photo} />
            <Text style={styles.photoLabel}>After</Text>
          </View>
        </View>

        <Text style={styles.question}>Does this issue look resolved?</Text>
        <Text style={styles.subQuestion}>
          Your feedback helps keep our community honest.
        </Text>

        <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={() => handleAnswer('yes')}>
          <Text style={styles.yesButtonText}>Yes, Resolved</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.noButton]} onPress={() => handleAnswer('no')}>
          <Text style={styles.noButtonText}>No, Still an Issue</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleAnswer('unsure')}>
          <Text style={styles.unsureText}>Not Sure</Text>
        </TouchableOpacity>
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
  photosRow: { flexDirection: 'row', gap: SPACING.sm },
  photoWrap: { flex: 1 },
  photo: { width: '100%', height: 140, borderRadius: RADIUS.md },
  photoLabel: { textAlign: 'center', marginTop: SPACING.xs, color: COLORS.textMuted, fontSize: 12 },
  question: { fontSize: 16, fontWeight: '700', color: COLORS.text, marginTop: SPACING.lg },
  subQuestion: { fontSize: 13, color: COLORS.textMuted, marginTop: SPACING.xs, marginBottom: SPACING.lg },
  button: { borderRadius: RADIUS.md, paddingVertical: 14, alignItems: 'center', marginBottom: SPACING.sm },
  yesButton: { backgroundColor: COLORS.primary },
  yesButtonText: { color: COLORS.white, fontWeight: '600', fontSize: 15 },
  noButton: { backgroundColor: '#FDECEC', borderWidth: 1, borderColor: '#F5B5B5' },
  noButtonText: { color: COLORS.danger, fontWeight: '600', fontSize: 15 },
  unsureText: { textAlign: 'center', color: COLORS.textMuted, marginTop: SPACING.sm, fontSize: 13 },
});