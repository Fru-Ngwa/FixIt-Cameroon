import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ReportIssueStep3Screen({ navigation }) {
  const [affectingMe, setAffectingMe] = useState('Yes');
  const [details, setDetails] = useState('');
  const [mission, setMission] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Report an Issue (Step 3)
        </Text>

        <View style={styles.emptySpace} />
      </View>

      {/* AFFECTING ME */}
      <Text style={styles.label}>
        Is this issue affecting you now?
      </Text>

      <View style={styles.yesNoRow}>

        {/* YES */}
        <TouchableOpacity
          style={[
            styles.yesNoButton,
            affectingMe === 'Yes' && styles.selectedYes,
          ]}
          onPress={() => setAffectingMe('Yes')}
        >
          <Text
            style={[
              styles.yesNoText,
              affectingMe === 'Yes' && styles.selectedYesText,
            ]}
          >
            Yes
          </Text>
        </TouchableOpacity>

        {/* NO */}
        <TouchableOpacity
          style={[
            styles.yesNoButton,
            affectingMe === 'No' && styles.selectedNo,
          ]}
          onPress={() => setAffectingMe('No')}
        >
          <Text
            style={[
              styles.yesNoText,
              affectingMe === 'No' && styles.selectedNoText,
            ]}
          >
            No
          </Text>
        </TouchableOpacity>

      </View>

      {/* ADDITIONAL DETAILS */}
      <View style={styles.detailsHeader}>
        <Text style={styles.label}>
          Add more details (optional)
        </Text>

        <Text style={styles.counter}>
          {details.length}/250
        </Text>
      </View>

      <TextInput
        style={styles.detailsBox}
        placeholder="Anything else we should know?"
        placeholderTextColor="#AAAAAA"
        value={details}
        onChangeText={(text) => {
          if (text.length <= 250) {
            setDetails(text);
          }
        }}
        maxLength={250}
        multiline
        textAlignVertical="top"
      />

      {/* ADD TO MISSION */}
      <Text style={styles.label}>
        Add to Mission (optional)
      </Text>

      <TouchableOpacity style={styles.missionBox}>
        <Text style={styles.missionText}>
          {mission || 'Link to an existing mission'}
        </Text>

        {/* Custom dropdown chevron */}
        <View style={styles.chevron}>
          <View style={styles.chevronLeft} />
          <View style={styles.chevronRight} />
        </View>
      </TouchableOpacity>

      {/* MISSION SEARCH */}
      <TouchableOpacity style={styles.searchBox}>
        <Text style={styles.searchText}>
          Search missions...
        </Text>

        <View style={styles.smallChevron}>
          <View style={styles.smallChevronLeft} />
          <View style={styles.smallChevronRight} />
        </View>
      </TouchableOpacity>

      {/* SUBMIT */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => 
          // Submission will be connected later
          navigation.navigate('DuplicateCheck')}
      >
        <Text style={styles.submitText}>
          Submit Report
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
    paddingTop: 18,
    paddingBottom: 25,
  },

  /* HEADER */

  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backArrow: {
    fontSize: 30,
    color: '#222222',
    lineHeight: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  emptySpace: {
    width: 30,
  },

  /* LABELS */

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111111',
    marginBottom: 7,
  },

  /* YES / NO */

  yesNoRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  yesNoButton: {
    height: 42,
    width: 88,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  yesNoText: {
    fontSize: 13,
    color: '#222222',
  },

  selectedYes: {
    backgroundColor: '#F0FFF7',
    borderColor: '#079447',
  },

  selectedYesText: {
    color: '#079447',
    fontWeight: '600',
  },

  selectedNo: {
    backgroundColor: '#FFF0F0',
    borderColor: '#E53935',
  },

  selectedNoText: {
    color: '#D32F2F',
    fontWeight: '600',
  },

  /* DETAILS */

  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },

  counter: {
    fontSize: 11,
    color: '#888888',
  },

  detailsBox: {
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

  /* MISSION */

  missionBox: {
    height: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  missionText: {
    fontSize: 13,
    color: '#AAAAAA',
  },

  /* CHEVRON */

  chevron: {
    width: 12,
    height: 12,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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

  /* SEARCH MISSIONS */

  searchBox: {
    height: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchText: {
    fontSize: 13,
    color: '#AAAAAA',
  },

  smallChevron: {
    width: 14,
    height: 9,
    position: 'relative',
  },

  smallChevronLeft: {
    position: 'absolute',
    width: 7,
    height: 2,
    backgroundColor: '#777777',
    transform: [{ rotate: '45deg' }],
    left: 0,
  },

  smallChevronRight: {
    position: 'absolute',
    width: 7,
    height: 2,
    backgroundColor: '#777777',
    transform: [{ rotate: '-45deg' }],
    right: 0,
  },

  /* SUBMIT */

  submitButton: {
    height: 45,
    backgroundColor: '#079447',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

});