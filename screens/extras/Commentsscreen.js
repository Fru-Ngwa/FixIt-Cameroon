import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const COMMENTS = [
  {
    id: '1',
    name: 'John T.',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    text: "This pothole is getting worse every day. Almost damaged my tire this morning.",
    time: '2hrs ago',
  },
  {
    id: '2',
    name: 'Sarah M.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "I can confirm, it's still a major problem.",
    time: '1hr ago',
  },
];

export default function CommentsScreen({ navigation, route }) {
  const issueId = route?.params?.issueId ?? '#ISSUE-1024';
  const [comment, setComment] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
        <Text style={styles.issueId}>{issueId}</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.content}>
          {COMMENTS.map((c) => (
            <View key={c.id} style={styles.commentRow}>
              <Image source={{ uri: c.avatar }} style={styles.avatar} />
              <View style={styles.bubble}>
                <View style={styles.bubbleHeader}>
                  <Text style={styles.name}>{c.name}</Text>
                  <Text style={styles.time}>{c.time}</Text>
                </View>
                <Text style={styles.text}>{c.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Add a comment..."
            placeholderTextColor={COLORS.textMuted}
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  issueId: { fontSize: 12, color: COLORS.textMuted },
  content: { padding: SPACING.md },
  commentRow: { flexDirection: 'row', marginBottom: SPACING.md },
  avatar: { width: 32, height: 32, borderRadius: RADIUS.pill, marginRight: SPACING.sm },
  bubble: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
  },
  bubbleHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontSize: 13, fontWeight: '600', color: COLORS.text },
  time: { fontSize: 11, color: COLORS.textMuted },
  text: { fontSize: 13, color: COLORS.text, marginTop: 4 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.card,
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    fontSize: 13,
    color: COLORS.text,
    marginRight: SPACING.sm,
  },
  sendButton: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});