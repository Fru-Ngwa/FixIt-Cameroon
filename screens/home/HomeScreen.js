import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local images - replace assets/images/photo5.png and photo6.png with your issue photos
const ISSUE_IMAGE_1 = require('../../assets/images/pothole.jpg');
const ISSUE_IMAGE_2 = require('../../assets/images/streetlight.jpg');

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Ionicons name="menu-outline" size={30} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.logo}>FixItCameroon</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications-outline" size={27} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* SEARCH BAR */}
        <View style={styles.searchRow}>
          <TouchableOpacity
            style={styles.searchBox}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SearchAndFilter')}
          >
            <Ionicons name="search-outline" size={22} color={COLORS.textMuted} />
            <TextInput
              placeholder="Search issues around you..."
              placeholderTextColor={COLORS.textMuted}
              style={styles.searchInput}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation.navigate('SearchAndFilter')}
          >
            <Ionicons name="filter-outline" size={23} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.tabText}>Following</Text>
          </TouchableOpacity>
        </View>

        {/* FIRST ISSUE CARD */}
        <TouchableOpacity
          style={styles.issueCard}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('IssueDetails', {
              issueId: '1024',
              title: 'Large pothole on Molyko Rd',
            })
          }
        >
          <View style={styles.imageContainer}>
            <Image source={ISSUE_IMAGE_1} style={styles.issueImage} />
            <View style={styles.reportedBadge}>
              <Text style={styles.reportedText}>Reported</Text>
            </View>
            <Text style={styles.distance}>200m away</Text>
          </View>

          <View style={styles.issueContent}>
            <Text style={styles.issueTitle}>Large pothole on Molyko Rd</Text>

            <View style={styles.locationRow}>
              <Text style={styles.category}>Roads</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.location}>Buea</Text>
            </View>

            <Text style={styles.description}>
              This pothole is causing damage to vehicles and traffic.
            </Text>

            <View style={styles.issueBottom}>
              <View style={styles.people}>
                <View style={styles.avatar}>
                  <Text>👤</Text>
                </View>
                <View style={styles.avatar}>
                  <Text>👤</Text>
                </View>
                <View style={styles.avatar}>
                  <Text>👤</Text>
                </View>
                <Ionicons name="people" size={20} color={COLORS.primary} />
                <Text style={styles.voteNumber}>28</Text>
              </View>
              <Text style={styles.time}>Today, 10:30 AM</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* SECOND ISSUE CARD */}
        <TouchableOpacity
          style={styles.issueCard}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('IssueDetails', {
              issueId: '1031',
              title: 'Broken streetlight',
            })
          }
        >
          <View style={styles.imageContainer}>
            <Image source={ISSUE_IMAGE_2} style={styles.issueImage} />
            <View style={styles.progressBadge}>
              <Text style={styles.progressText}>In Progress</Text>
            </View>
            <Text style={styles.distance}>1.2km away</Text>
          </View>

          <View style={styles.issueContent}>
            <Text style={styles.issueTitle}>Broken streetlight</Text>

            <View style={styles.locationRow}>
              <Text style={styles.category}>Streetlights</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.location}>Douala</Text>
            </View>

            <Text style={styles.description}>
              Streetlight has been out for over a week, making the area unsafe at night.
            </Text>

            <View style={styles.issueBottom}>
              <View style={styles.people}>
                <View style={styles.avatar}>
                  <Text>👤</Text>
                </View>
                <View style={styles.avatar}>
                  <Text>👤</Text>
                </View>
                <Ionicons name="people" size={20} color={COLORS.primary} />
                <Text style={styles.voteNumber}>14</Text>
              </View>
              <Text style={styles.time}>Yesterday, 6:15 PM</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* SPACE FOR BOTTOM NAVIGATION */}
        <View style={{ height: 90 }} />
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => {}}>
          <Ionicons name="home" size={24} color={COLORS.primary} />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ReportIssueStep1')}
        >
          <Ionicons name="location-outline" size={24} color={COLORS.text} />
          <Text style={styles.navText}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={24} color={COLORS.text} />
          <Text style={styles.navText}>Updates</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-outline" size={24} color={COLORS.text} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scrollContent: { paddingHorizontal: 16, paddingTop: 10 },
  topBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  logo: { fontSize: 20, fontWeight: '700', color: COLORS.text },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 8, marginBottom: 18 },
  searchBox: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: COLORS.text },
  filterButton: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: 18,
  },
  activeTab: { borderBottomWidth: 3, borderBottomColor: COLORS.primary, paddingBottom: 12, paddingHorizontal: 8 },
  activeTabText: { color: COLORS.primary, fontSize: 15, fontWeight: '700' },
  tabText: { color: COLORS.text, fontSize: 15, paddingBottom: 14 },
  issueCard: { backgroundColor: COLORS.white, marginBottom: 20 },
  imageContainer: {
    height: 190,
    borderRadius: 14,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: COLORS.border,
  },
  issueImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  reportedBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: '#FACC15',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  reportedText: { color: COLORS.text, fontWeight: '700', fontSize: 13 },
  progressBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  progressText: { color: COLORS.white, fontWeight: '700', fontSize: 13 },
  distance: { position: 'absolute', top: 17, right: 14, color: COLORS.white, fontWeight: '700', fontSize: 14 },
  issueContent: { paddingTop: 12, paddingHorizontal: 4 },
  issueTitle: { fontSize: 19, fontWeight: '700', color: COLORS.text, marginBottom: 6 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  category: { color: COLORS.primary, fontSize: 14, fontWeight: '600' },
  dot: { marginHorizontal: 8, color: COLORS.textMuted },
  location: { color: COLORS.text, fontSize: 14 },
  description: { color: COLORS.text, fontSize: 14, lineHeight: 21, marginBottom: 15 },
  issueBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  people: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -5,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  voteNumber: { marginLeft: 5, fontWeight: '600', color: COLORS.text },
  time: { color: COLORS.textMuted, fontSize: 12 },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: { alignItems: 'center', justifyContent: 'center' },
  activeNavText: { color: COLORS.primary, fontSize: 11, marginTop: 3 },
  navText: { color: COLORS.text, fontSize: 11, marginTop: 3 },
});