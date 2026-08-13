import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const NOTIFICATIONS = [
  {
    id: '1',
    icon: 'checkmark-circle-outline',
    title: 'Your issue #1024 is now In Progress',
    time: '2hrs ago',
    unread: true,
  },
  {
    id: '2',
    icon: 'megaphone-outline',
    title: 'City Council has scheduled an inspection for tomorrow',
    time: '5hrs ago',
    unread: true,
  },
  {
    id: '3',
    icon: 'chatbubble-outline',
    title: 'Sarah M. commented on issue #1032',
    time: '1 day ago',
    unread: false,
  },
  {
    id: '4',
    icon: 'thumbs-up-outline',
    title: 'You received 5 upvotes on your report',
    time: '2 days ago',
    unread: false,
  },
];

export default function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {NOTIFICATIONS.map((item) => (
          <TouchableOpacity key={item.id} style={styles.row}>
            <View style={[styles.iconWrap, item.unread && styles.iconWrapUnread]}>
              <Ionicons name={item.icon} size={18} color={item.unread ? COLORS.primary : COLORS.textMuted} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.title, item.unread && styles.titleUnread]}>{item.title}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            {item.unread && <View style={styles.dot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  content: { padding: SPACING.md },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.pill,
    backgroundColor: '#F1F3F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  iconWrapUnread: { backgroundColor: '#E7F3EB' },
  title: { fontSize: 13, color: COLORS.text },
  titleUnread: { fontWeight: '600' },
  time: { fontSize: 11, color: COLORS.textMuted, marginTop: 2 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.primary, marginLeft: SPACING.sm },
});