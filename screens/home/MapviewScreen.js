import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

// Local image - replace assets/images/photo8.png with your banner
const BANNER_IMAGE = require('../../assets/images/map.jpg');

const STATUS_COLOR = {
  'In Progress': COLORS.primary,
  Reported: COLORS.danger,
  Resolved: COLORS.primary,
};

const ISSUES = [
  {
    id: '1',
    title: 'Broken streetlight',
    distance: '1.2km away',
    status: 'In Progress',
    pinColor: COLORS.primary,
    latitude: 4.0511,
    longitude: 9.7679,
  },
  {
    id: '2',
    title: 'Overflowing waste',
    distance: '2.4km away',
    status: 'Reported',
    pinColor: COLORS.danger,
    latitude: 4.0538,
    longitude: 9.7702,
  },
  {
    id: '3',
    title: 'Water leakage',
    distance: '3.1km away',
    status: 'Resolved',
    pinColor: COLORS.primary,
    latitude: 4.049,
    longitude: 9.7655,
  },
  {
    id: '4',
    title: 'Pothole on main road',
    distance: '0.8km away',
    status: 'Reported',
    pinColor: COLORS.danger,
    latitude: 4.0525,
    longitude: 9.7645,
  },
  {
    id: '5',
    title: 'Blocked drainage',
    distance: '1.9km away',
    status: 'In Progress',
    pinColor: COLORS.warning,
    latitude: 4.0505,
    longitude: 9.7715,
  },
];

const INITIAL_REGION = {
  latitude: 4.0511,
  longitude: 9.7679,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

export default function MapviewScreen({ navigation }) {
  const [region, setRegion] = useState(INITIAL_REGION);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Map View</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={BANNER_IMAGE} style={styles.banner} />

        <View style={styles.mapWrap}>
          <MapView
            style={styles.map}
            initialRegion={INITIAL_REGION}
            region={region}
            onRegionChangeComplete={setRegion}
            showsUserLocation
            showsMyLocationButton={false}
          >
            {ISSUES.map((issue) => (
              <Marker
                key={issue.id}
                coordinate={{ latitude: issue.latitude, longitude: issue.longitude }}
                pinColor={issue.pinColor}
              >
                <Callout>
                  <View style={styles.callout}>
                    <Text style={styles.calloutTitle}>{issue.title}</Text>
                    <Text style={[styles.calloutStatus, { color: STATUS_COLOR[issue.status] }]}>
                      {issue.status}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Nearby Issues</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MyReports')}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {ISSUES.slice(0, 3).map((issue) => (
          <TouchableOpacity
            key={issue.id}
            style={styles.issueRow}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('IssueDetails', { issueId: issue.id, title: issue.title })
            }
          >
            <View style={styles.issueThumb} />

            <View style={styles.issueInfo}>
              <Text style={styles.issueTitle} numberOfLines={1}>
                {issue.title}
              </Text>
              <Text style={styles.issueDistance}>{issue.distance}</Text>
            </View>

            <Text style={[styles.issueStatus, { color: STATUS_COLOR[issue.status] }]}>
              {issue.status}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  title: { fontSize: 17, fontWeight: '600', color: COLORS.text },
  content: { paddingBottom: SPACING.xl },
  banner: { width: '100%', height: 160, marginBottom: SPACING.lg },
  mapWrap: {
    marginHorizontal: SPACING.lg,
    height: 260,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    backgroundColor: '#E8E6DF',
  },
  map: { flex: 1 },
  callout: { padding: 4, minWidth: 140 },
  calloutTitle: { fontSize: 13, fontWeight: '600', color: COLORS.text, marginBottom: 2 },
  calloutStatus: { fontSize: 12, fontWeight: '600' },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  sectionTitle: { fontSize: 15, fontWeight: '600', color: COLORS.text },
  viewAll: { fontSize: 13, fontWeight: '600', color: COLORS.primary },
  issueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  issueThumb: { width: 54, height: 54, borderRadius: RADIUS.sm, backgroundColor: '#D9D9D9' },
  issueInfo: { flex: 1 },
  issueTitle: { fontSize: 14, fontWeight: '600', color: COLORS.text, marginBottom: 2 },
  issueDistance: { fontSize: 12.5, color: COLORS.textMuted },
  issueStatus: { fontSize: 12.5, fontWeight: '600' },
});