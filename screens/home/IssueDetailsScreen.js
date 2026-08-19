import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local image - replace assets/images/photo10.png with your issue photo
const ISSUE_IMAGE = require('../../assets/images/pothole.jpg');

export default function IssueDetailsScreen({ navigation, route }) {
  const issueId = route?.params?.issueId ?? '1024';
  const title = route?.params?.title ?? 'Large pothole on Molyko Rd';

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.text} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Issue Details</Text>

          <TouchableOpacity>
            <Ionicons name="share-outline" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Status + Issue number */}
        <View style={styles.statusRow}>
          <View style={styles.status}>
            <Text style={styles.statusText}>Reported</Text>
          </View>
          <Text style={styles.issueNumber}>#ISSUE-{issueId}</Text>
        </View>

        <Image source={ISSUE_IMAGE} style={styles.potholeImage} />

        <Text style={styles.title}>{title}</Text>

        <View style={styles.categoryRow}>
          <Text style={styles.category}>Roads</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.location}>Buea</Text>
        </View>

        <Text style={styles.description}>
          This pothole is causing damage to vehicles and traffic.
        </Text>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={22} color={COLORS.text} />
          <Text style={styles.infoText}>Molyko Rd, Buea</Text>
        </View>

        <View style={styles.reporterRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JT</Text>
          </View>

          <View>
            <Text style={styles.reportedBy}>Reported by</Text>
            <Text style={styles.name}>John T.</Text>
          </View>

          <Text style={styles.time}>Today, 10:30 AM</Text>
        </View>

        <View style={styles.actions}>
          <View style={styles.action}>
            <Ionicons name="thumbs-up-outline" size={24} color={COLORS.text} />
            <Text style={styles.actionText}>23</Text>
          </View>

          <TouchableOpacity
            style={styles.action}
            onPress={() => navigation.navigate('Comments', { issueId: `#ISSUE-${issueId}` })}
          >
            <Ionicons name="chatbubble-outline" size={23} color={COLORS.text} />
            <Text style={styles.actionText}>5</Text>
          </TouchableOpacity>

          <View style={styles.action}>
            <Ionicons name="share-social-outline" size={24} color={COLORS.text} />
            <Text style={styles.actionText}>Share</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  content: { paddingHorizontal: 20, paddingBottom: SPACING.xl },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
  },
  headerTitle: { fontSize: 18, fontWeight: '700', color: COLORS.text },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  status: { backgroundColor: '#FFD45C', paddingHorizontal: 14, paddingVertical: 8, borderRadius: RADIUS.sm },
  statusText: { fontSize: 13, fontWeight: '700', color: COLORS.text },
  issueNumber: { fontSize: 13, color: COLORS.textMuted, fontWeight: '600' },
  potholeImage: { width: '100%', height: 220, borderRadius: RADIUS.lg, resizeMode: 'cover' },
  title: { fontSize: 20, fontWeight: '700', color: COLORS.text, marginTop: SPACING.lg },
  categoryRow: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.sm },
  category: { fontSize: 14, color: COLORS.primary, fontWeight: '600' },
  dot: { fontSize: 14, marginHorizontal: 8, color: COLORS.textMuted },
  location: { fontSize: 14, color: COLORS.text },
  description: { fontSize: 14, lineHeight: 21, marginTop: SPACING.md, color: COLORS.text },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.lg },
  infoText: { fontSize: 14, marginLeft: SPACING.sm, color: COLORS.text },
  reporterRow: { flexDirection: 'row', alignItems: 'center', marginTop: SPACING.lg },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  avatarText: { color: COLORS.white, fontSize: 14, fontWeight: '700' },
  reportedBy: { color: COLORS.textMuted, fontSize: 12 },
  name: { fontSize: 14, marginTop: 2, color: COLORS.text, fontWeight: '600' },
  time: { marginLeft: 'auto', fontSize: 12, color: COLORS.textMuted },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  action: { flexDirection: 'row', alignItems: 'center' },
  actionText: { fontSize: 14, marginLeft: SPACING.sm, color: COLORS.text },
});