import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ReportIssueStep2Screen({ navigation }) {
  const [category, setCategory] = useState('Roads');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('High');
  const [noticedDate, setNoticedDate] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Report an Issue (Step 2)
        </Text>

        <View style={styles.emptySpace} />
      </View>

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
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 25,
  },

  /* HEADER */

  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 35,
  },

  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backArrow: {
    fontSize: 36,
    color: '#222222',
    lineHeight: 36,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
  },

  emptySpace: {
    width: 30,
  },

  /* LABELS */

  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
    marginBottom: 7,
  },

  /* CATEGORY */

  categoryBox: {
    height: 48,
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
    fontSize: 15,
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
    fontSize: 13,
    color: '#888888',
  },

  descriptionBox: {
    height: 80,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingTop: 10,
    fontSize: 15,
    color: '#222222',
    marginBottom: 18,
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
    height: 44,
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
    fontSize: 16,
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
    height: 48,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginBottom: 18,
  },

  dateText: {
    fontSize: 15,
    color: '#AAAAAA',
  },

  /* NEXT */

  nextButton: {
    height: 50,
    backgroundColor: '#079447',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  nextText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

});