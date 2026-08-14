import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function DuplicateCheckScreen({ navigation }) {
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
          Duplicate Check
        </Text>

        <View style={styles.emptySpace} />
      </View>

      {/* SEARCH ICON */}
      <View style={styles.iconContainer}>
        <View style={styles.searchCircle}>
          <View style={styles.personHead} />
          <View style={styles.personBody} />
        </View>

        <View style={styles.searchHandle} />
      </View>

      {/* MESSAGE */}
      <Text style={styles.heading}>
        Similar issue found!
      </Text>

      <Text style={styles.description}>
        This issue was already reported nearby.
        You can view the existing report or
        continue if this is a different issue.
      </Text>

      {/* EXISTING ISSUE CARD */}
      <View style={styles.issueCard}>

        <View style={styles.issueIcon}>
          <Text style={styles.potholeIcon}>●</Text>
        </View>

        <View style={styles.issueInfo}>

          <Text style={styles.issueTitle}>
            Large pothole on Molyko Rd
          </Text>

          <Text style={styles.reported}>
            Reported 2 hours ago
          </Text>

          <View style={styles.statsRow}>

            <Text style={styles.distance}>
              📍 800m away
            </Text>

            <Text style={styles.supporters}>
              ♥ 22 supporters
            </Text>

          </View>

        </View>

      </View>

      {/* VIEW EXISTING ISSUE */}
      <TouchableOpacity
        style={styles.existingButton}
        onPress={() => {
          console.log('View existing issue');
        }}
      >
        <Text style={styles.existingButtonText}>
          View Existing Issue
        </Text>
      </TouchableOpacity>

      {/* DIFFERENT ISSUE */}
      <TouchableOpacity
        style={styles.differentButton}
        onPress={() => {
          console.log('This is a different issue');
        }}
      >
        <Text style={styles.differentButtonText}>
          This is a Different Issue
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
    paddingBottom: 30,
  },

  /* HEADER */

  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
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

  /* SEARCH ICON */

  iconContainer: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    borderWidth: 5,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  searchHandle: {
    position: 'absolute',
    width: 25,
    height: 5,
    backgroundColor: '#777777',
    borderRadius: 3,
    right: 7,
    bottom: 16,
    transform: [{ rotate: '45deg' }],
  },

  personHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#079447',
    marginBottom: 3,
  },

  personBody: {
    width: 23,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#079447',
  },

  /* MESSAGE */

  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 8,
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  /* ISSUE CARD */

  issueCard: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
  },

  issueIcon: {
    width: 65,
    height: 65,
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  potholeIcon: {
    fontSize: 30,
    color: '#555555',
  },

  issueInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  issueTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 6,
  },

  reported: {
    fontSize: 11,
    color: '#777777',
    marginBottom: 8,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  distance: {
    fontSize: 11,
    color: '#079447',
    marginRight: 15,
  },

  supporters: {
    fontSize: 11,
    color: '#777777',
  },

  /* EXISTING ISSUE BUTTON */

  existingButton: {
    height: 45,
    backgroundColor: '#079447',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  existingButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  /* DIFFERENT ISSUE BUTTON */

  differentButton: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  differentButtonText: {
    color: '#222222',
    fontSize: 14,
    fontWeight: '600',
  },

});