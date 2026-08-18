import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IssueDetails({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Issue Details</Text>

        <TouchableOpacity>
          <Ionicons name="share-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Status + Issue number */}
      <View style={styles.statusRow}>
        <View style={styles.status}>
          <Text style={styles.statusText}>Reported</Text>
        </View>

        <Text style={styles.issueNumber}>#ISSUE-1024</Text>
      </View>

      {/* Pothole Image */}
      <Image
        source={require("./assets/IssuesDetails.jpeg")}
        style={styles.potholeImage}
      />

      {/* Title */}
      <Text style={styles.title}>Large pothole on Molyko Rd</Text>

      {/* Category */}
      <View style={styles.categoryRow}>
        <Text style={styles.category}>Roads</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.location}>Buea</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        This pothole is causing damage to vehicles and traffic.
      </Text>

      {/* Location */}
      <View style={styles.infoRow}>
        <Ionicons name="location-outline" size={30} color="black" />
        <Text style={styles.infoText}>Molyko Rd, Buea</Text>
      </View>

      {/* Reporter */}
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

      {/* Bottom actions */}
      <View style={styles.actions}>
        <View style={styles.action}>
          <Ionicons name="thumbs-up-outline" size={30} color="black" />
          <Text style={styles.actionText}>23</Text>
        </View>

        <View style={styles.action}>
          <Ionicons name="chatbubble-outline" size={29} color="black" />
          <Text style={styles.actionText}>5</Text>
        </View>

        <View style={styles.action}>
          <Ionicons name="share-social-outline" size={30} color="black" />
          <Text style={styles.actionText}>Share</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 55,
    paddingBottom: 25,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  status: {
    backgroundColor: "#FFD45C",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },

  statusText: {
    fontSize: 18,
    fontWeight: "700",
  },

  issueNumber: {
    fontSize: 18,
    color: "#626978",
    fontWeight: "600",
  },

  potholeImage: {
    width: "100%",
    height: 480,
    borderRadius: 18,
    resizeMode: "cover",
  },

  title: {
    fontSize: 27,
    fontWeight: "700",
    marginTop: 25,
  },

  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  category: {
    fontSize: 20,
    color: "#169447",
    fontWeight: "600",
  },

  dot: {
    fontSize: 20,
    marginHorizontal: 10,
  },

  location: {
    fontSize: 20,
  },

  description: {
    fontSize: 20,
    lineHeight: 30,
    marginTop: 22,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  infoText: {
    fontSize: 19,
    marginLeft: 12,
  },

  reporterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#168CFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  reportedBy: {
    color: "#687080",
    fontSize: 16,
  },

  name: {
    fontSize: 20,
    marginTop: 3,
  },

  time: {
    marginLeft: "auto",
    fontSize: 16,
    color: "#687080",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 35,
  },

  action: {
    flexDirection: "row",
    alignItems: "center",
  },

  actionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});