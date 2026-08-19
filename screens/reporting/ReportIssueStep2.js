import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../../constants/theme';

export default function ReportIssueStep2Screen({ navigation }) {
  const [category, setCategory] = useState('Roads');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('High');
  const [noticedDate, setNoticedDate] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report an Issue (Step 2)</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

      {/* CATEGORY */}
      <Text style={styles.label}>Category</Text>

      <TouchableOpacity style={styles.categoryBox}>
        <Text style={styles.categoryText}>
          {category}
        </Text>

        {/* Proper dropdown chevron */}
        <View style={styles.chevron}>
          <View style={styles.chevronLeft} />
          <View style={styles.chevronRight} />
        </View>
      </TouchableOpacity>

      {/* DESCRIPTION */}
      <View style={styles.descriptionHeader}>
        <Text style={styles.label}>Description</Text>

        <Text style={styles.counter}>
          {description.length}/250
        </Text>
      </View>

      <TextInput
        style={styles.descriptionBox}
        placeholder="Describe the issue."
        placeholderTextColor="#AAAAAA"
        value={description}
        onChangeText={(text) => {
          if (text.length <= 250) {
            setDescription(text);
          }
        }}
        maxLength={250}
        multiline
        textAlignVertical="top"
      />

      {/* SEVERITY */}
      <Text style={styles.label}>Severity</Text>

      <View style={styles.severityRow}>

        {/* LOW */}
        <TouchableOpacity
          style={[
            styles.severityButton,
            severity === 'Low' && styles.selectedSeverity,
          ]}
          onPress={() => setSeverity('Low')}
        >
          <Text
            style={[
              styles.severityText,
              severity === 'Low' && styles.selectedText,
            ]}
          >
            Low
          </Text>
        </TouchableOpacity>

        {/* MEDIUM */}
        <TouchableOpacity
          style={[
            styles.severityButton,
            styles.mediumButton,
            severity === 'Medium' && styles.selectedSeverity,
          ]}
          onPress={() => setSeverity('Medium')}
        >
          <Text
            style={[
              styles.severityText,
              severity === 'Medium' && styles.selectedText,
            ]}
          >
            Medium
          </Text>
        </TouchableOpacity>

        {/* HIGH */}
        <TouchableOpacity
          style={[
            styles.severityButton,
            severity === 'High' && styles.selectedSeverity,
          ]}
          onPress={() => setSeverity('High')}
        >
          <Text
            style={[
              styles.severityText,
              severity === 'High' && styles.selectedText,
            ]}
          >
            High
          </Text>
        </TouchableOpacity>

      </View>

      {/* WHEN DID YOU NOTICE THIS? */}
      <Text style={styles.label}>
        When did you notice this?
      </Text>

      <TouchableOpacity style={styles.dateBox}>
        <Text style={styles.dateText}>
          {noticedDate || 'Select date'}
        </Text>
      </TouchableOpacity>

      {/* NEXT BUTTON */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ReportIssueStep3')}
      >
        <Text style={styles.nextText}>
          Next
        </Text>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 65,
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  headerTitle: { fontSize: 18, fontWeight: '700', color: '#111111' },

  headerSpacer: { width: 22 },

  /* LABELS */

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111111',
    marginBottom: 7,
  },

  /* CATEGORY */

  categoryBox: {
    height: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingRight: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  categoryText: {
    fontSize: 13,
    color: '#222222',
    fontWeight: '400',
    flex: 1,
  },

  /* CUSTOM CHEVRON */

  chevron: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  chevronLeft: {
    position: 'absolute',
    width: 8,
    height: 3,
    backgroundColor: '#777777',
    transform: [{ rotate: '45deg' }],
    left: 0,
  },

  chevronRight: {
    position: 'absolute',
    width: 8,
    height: 3,
    backgroundColor: '#777777',
    transform: [{ rotate: '-45deg' }],
    right: 0,
  },

  /* DESCRIPTION */

  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 7,
  },

  counter: {
    fontSize: 11,
    color: '#888888',
  },

  descriptionBox: {
    height: 78,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 10,
    fontSize: 13,
    color: '#222222',
    marginBottom: 20,
  },

  /* SEVERITY */

  severityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-button',
    marginBottom: 18,
    gap: 10,
  },

  severityButton: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  mediumButton: {
    flex: 1,
  },

  severityText: {
    fontSize: 13,
    color: '#222222',
  },

  selectedSeverity: {
    backgroundColor: '#FFF0F0',
    borderColor: '#E53935',
    borderWidth: 1,
  },

  selectedText: {
    color: '#D32F2F',
    fontWeight: '600',
  },

  /* DATE */

  dateBox: {
    height: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginBottom: 18,
  },

  dateText: {
    fontSize: 13,
    color: '#AAAAAA',
  },

  /* NEXT */

  nextButton: {
    height: 45,
    backgroundColor: '#079447',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },

  nextText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

});