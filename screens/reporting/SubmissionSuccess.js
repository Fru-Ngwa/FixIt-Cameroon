import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function SubmissionSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* CONFETTI */}
      <View style={[styles.dot, styles.dot1]} />
      <View style={[styles.dot, styles.dot2]} />
      <View style={[styles.dot, styles.dot3]} />
      <View style={[styles.dot, styles.dot4]} />
      <View style={[styles.dot, styles.dot5]} />
      <View style={[styles.dot, styles.dot6]} />
      <View style={[styles.dot, styles.dot7]} />
      <View style={[styles.dot, styles.dot8]} />

      {/* SUCCESS ICON */}
      <View style={styles.successCircle}>
        <Text style={styles.checkMark}>✓</Text>
      </View>

      {/* THANK YOU */}
      <Text style={styles.thankYou}>
        Thank You!
      </Text>

      {/* MESSAGE */}
      <Text style={styles.message}>
        Your issue has been reported
        {'\n'}
        successfully.
      </Text>

      {/* ISSUE ID LABEL */}
      <Text style={styles.issueLabel}>
        Issue ID
      </Text>

      {/* ISSUE ID */}
      <Text style={styles.issueId}>
        #SISUE-1024
      </Text>

      {/* VIEW ISSUE */}
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => {
          console.log('View Issue');
        }}
      >
        <Text style={styles.viewButtonText}>
          View Issue
        </Text>
      </TouchableOpacity>

      {/* BACK TO HOME */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.homeButtonText}>
          Back to Home
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 145,
    paddingBottom: 70,
  },

  /* =========================
     SUCCESS CIRCLE
  ========================= */

  successCircle: {
    width: 125,
    height: 125,
    borderRadius: 63,
    backgroundColor: '#079447',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  checkMark: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '400',
    lineHeight: 82,
  },

  /* =========================
     TEXT
  ========================= */

  thankYou: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 12,
  },

  message: {
    fontSize: 15,
    lineHeight: 23,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 27,
  },

  issueLabel: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 5,
  },

  issueId: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111111',
    marginBottom: 32,
  },

  /* =========================
     VIEW ISSUE BUTTON
  ========================= */

  viewButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#079447',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 18,
  },

  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  /* =========================
     BACK HOME BUTTON
  ========================= */

  homeButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeButtonText: {
    color: '#222222',
    fontSize: 16,
    fontWeight: '600',
  },

  /* =========================
     CONFETTI
  ========================= */

  dot: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  dot1: {
    top: 115,
    left: 105,
    backgroundColor: '#159447',
  },

  dot2: {
    top: 88,
    left: 278,
    backgroundColor: '#C98A52',
  },

  dot3: {
    top: 91,
    right: 115,
    backgroundColor: '#159447',
  },

  dot4: {
    top: 120,
    right: 77,
    backgroundColor: '#D85B75',
  },

  dot5: {
    top: 175,
    left: 78,
    backgroundColor: '#159447',
  },

  dot6: {
    top: 184,
    left: 148,
    backgroundColor: '#D3A14C',
  },

  dot7: {
    top: 177,
    right: 95,
    backgroundColor: '#159447',
  },

  dot8: {
    top: 205,
    right: 185,
    backgroundColor: '#888888',
  },

});