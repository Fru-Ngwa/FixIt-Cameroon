import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.logo}>FixItCameroon</Text>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={27} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* SEARCH BAR */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons
              name="search-outline"
              size={22}
              color="#6B7280"
            />

            <TextInput
              placeholder="Search issues around you..."
              placeholderTextColor="#6B7280"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Ionicons
              name="filter-outline"
              size={23}
              color="#374151"
            />
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
        <View style={styles.issueCard}>

          <View style={styles.imageContainer}>

            {/* CHANGE THIS IMAGE PATH TO YOUR IMAGE */}
            <Image
              source={require("../../assets/Pothole.jpeg")}
              style={styles.issueImage}
            />

            <View style={styles.reportedBadge}>
              <Text style={styles.reportedText}>Reported</Text>
            </View>

            <Text style={styles.distance}>200m away</Text>

          </View>

          <View style={styles.issueContent}>

            <Text style={styles.issueTitle}>
              Large pothole on Molyko Rd
            </Text>

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

                <Ionicons
                  name="people"
                  size={20}
                  color="#16A34A"
                />

                <Text style={styles.voteNumber}>28</Text>
              </View>

              <Text style={styles.time}>Today, 10:30 AM</Text>

            </View>

          </View>
        </View>

        {/* SECOND ISSUE CARD */}
        <View style={styles.issueCard}>

          <View style={styles.imageContainer}>

            <Image
              source={require("../../assets/Pothole.jpeg")}
              style={styles.issueImage}
            />

            <View style={styles.progressBadge}>
              <Text style={styles.progressText}>In Progress</Text>
            </View>

            <Text style={styles.distance}>1.2km away</Text>

          </View>

          <View style={styles.issueContent}>

            <Text style={styles.issueTitle}>
              Broken streetlight
            </Text>

            <View style={styles.locationRow}>
              <Text style={styles.category}>Streetlights</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.location}>Douala</Text>
            </View>

          </View>

        </View>

        {/* SPACE FOR BOTTOM NAVIGATION */}
        <View style={{ height: 90 }} />

      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="home"
            size={24}
            color="#16A34A"
          />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="location-outline"
            size={24}
            color="#374151"
          />
          <Text style={styles.navText}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#374151"
          />
          <Text style={styles.navText}>Updates</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="person-outline"
            size={24}
            color="#374151"
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  topBar: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: "#FFFFFF",
  },

  logo: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
    marginBottom: 18,
  },

  searchBox: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#111827",
  },

  filterButton: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginBottom: 18,
  },

  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#16A34A",
    paddingBottom: 12,
    paddingHorizontal: 8,
  },

  activeTabText: {
    color: "#16A34A",
    fontSize: 15,
    fontWeight: "700",
  },

  tabText: {
    color: "#111827",
    fontSize: 15,
    paddingBottom: 14,
  },

  issueCard: {
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },

  imageContainer: {
    height: 190,
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#E5E7EB",
  },

  issueImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  reportedBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: "#FACC15",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  reportedText: {
    color: "#111827",
    fontWeight: "700",
    fontSize: 13,
  },

  progressBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: "#16A34A",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  progressText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },

  distance: {
    position: "absolute",
    top: 17,
    right: 14,
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  issueContent: {
    paddingTop: 12,
    paddingHorizontal: 4,
  },

  issueTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  category: {
    color: "#16A34A",
    fontSize: 14,
    fontWeight: "600",
  },

  dot: {
    marginHorizontal: 8,
    color: "#6B7280",
  },

  location: {
    color: "#374151",
    fontSize: 14,
  },

  description: {
    color: "#374151",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 15,
  },

  issueBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  people: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: -5,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  voteNumber: {
    marginLeft: 5,
    fontWeight: "600",
    color: "#374151",
  },

  time: {
    color: "#6B7280",
    fontSize: 12,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeNavText: {
    color: "#16A34A",
    fontSize: 11,
    marginTop: 3,
  },

  navText: {
    color: "#374151",
    fontSize: 11,
    marginTop: 3,
  },
});