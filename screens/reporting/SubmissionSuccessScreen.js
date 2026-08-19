import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SubmissionSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.inner}>
        {/* CONFETTI */}
        <View style={[styles.dot, styles.dot1]} />
        <View style={[styles.dot, styles.dot2]} />
        <View style={[styles.dot, styles.dot3]} />
        <View style={[styles.dot, styles.dot4]} />
        <View style={[styles.dot, styles.dot5]} />
        <View style={[styles.dot, styles.dot6]} />
        <View style={[styles.dot, styles.dot7]} />
        <View style={[styles.dot, styles.dot8]} />

        <View style={styles.successCircle}>
          <Text style={styles.checkMark}>✓</Text>
        </View>

        <Text style={styles.thankYou}>Thank You!</Text>

        <Text style={styles.message}>
          Your issue has been reported{'\n'}successfully.
        </Text>

        <Text style={styles.issueLabel}>Issue ID</Text>
        <Text style={styles.issueId}>#ISSUE-1024</Text>

        <TouchableOpacity
          style={styles.viewButton}
          onPress={() =>
            navigation.navigate('IssueDetails', {
              issueId: '1024',
              title: 'Large pothole on Molyko Rd',
            })
          }
        >
          <Text style={styles.viewButtonText}>View Issue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  inner: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 100,
  },
  successCircle: {
    width: 125,
    height: 125,
    borderRadius: 63,
    backgroundColor: '#079447',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  checkMark: { color: '#FFFFFF', fontSize: 76, fontWeight: '400', lineHeight: 82 },
  thankYou: { fontSize: 24, fontWeight: '700', color: '#111111', marginBottom: 12 },
  message: { fontSize: 15, lineHeight: 23, color: '#777777', textAlign: 'center', marginBottom: 27 },
  issueLabel: { fontSize: 13, color: '#888888', marginBottom: 5 },
  issueId: { fontSize: 20, fontWeight: '800', color: '#111111', marginBottom: 32 },
  viewButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#079447',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  viewButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
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
  homeButtonText: { color: '#222222', fontSize: 16, fontWeight: '600' },
  dot: { position: 'absolute', width: 7, height: 7, borderRadius: 4 },
  dot1: { top: 60, left: 105, backgroundColor: '#159447' },
  dot2: { top: 35, left: 278, backgroundColor: '#C98A52' },
  dot3: { top: 38, right: 115, backgroundColor: '#159447' },
  dot4: { top: 67, right: 77, backgroundColor: '#D85B75' },
  dot5: { top: 122, left: 78, backgroundColor: '#159447' },
  dot6: { top: 131, left: 148, backgroundColor: '#D3A14C' },
  dot7: { top: 124, right: 95, backgroundColor: '#159447' },
  dot8: { top: 152, right: 185, backgroundColor: '#888888' },
});