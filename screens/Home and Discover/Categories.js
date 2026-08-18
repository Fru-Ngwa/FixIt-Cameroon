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
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const GREEN = '#3E7C48';

const CATEGORIES = [
  { key: 'Roads', label: 'Roads', iconSet: 'mci', icon: 'binoculars' },
  { key: 'Streetlights', label: 'Streetlights', iconSet: 'mci', icon: 'lightbulb-outline' },
  { key: 'Drainage', label: 'Drainage', iconSet: 'mci', icon: 'pipe' },
  { key: 'Water', label: 'Water', iconSet: 'mci', icon: 'water-outline' },
  { key: 'Waste', label: 'Waste', iconSet: 'mci', icon: 'trash-can-outline' },
  { key: 'Environment', label: 'Environment', badge: true },
  { key: 'Buildings', label: 'Buildings', iconSet: 'mci', icon: 'office-building-outline' },
  { key: 'Safety', label: 'Safety', iconSet: 'mci', icon: 'shield-outline' },
  { key: 'Other', label: 'Other', dots: true },
];

const QUICK_ACTIONS = [
  { key: 'nearby', label: 'Nearby\nIssues', icon: 'location-outline', accent: true },
  { key: 'reports', label: 'My\nReports', icon: 'information-circle-outline' },
  { key: 'upvote', label: 'Upvote\nIssues', icon: 'thumbs-up-outline' },
];

export default function CategoriesScreen({ navigation }) {
  const [selected, setSelected] = useState('Roads');

  const handleSelectCategory = (key) => {
    setSelected(key);
  };

  const handleQuickAction = (key) => {
    if (key === 'reports') {
      navigation.navigate('MyReports');
    }
  };

  const renderCategoryIcon = (cat, isSelected) => {
    const iconColor = isSelected || cat.key === 'Roads' ? GREEN : COLORS.text;

    if (cat.badge) {
      return (
        <View style={styles.iconBadge}>
          <Ionicons name="add" size={14} color="#fff" />
        </View>
      );
    }

    if (cat.dots) {
      return (
        <View style={styles.dualDot}>
          <View style={[styles.dot, { marginRight: -2 }]} />
          <View style={styles.dot} />
        </View>
      );
    }

    return (
      <MaterialCommunityIcons
        name={cat.icon}
        size={24}
        color={iconColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Categories</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../../assets/Categories.jpeg')}
          style={styles.banner}
        />

        <View style={styles.grid}>
          {CATEGORIES.map((cat) => {
            const isSelected = selected === cat.key;

            return (
              <TouchableOpacity
                key={cat.key}
                style={[
                  styles.card,
                  isSelected && styles.cardSelected,
                ]}
                onPress={() => handleSelectCategory(cat.key)}
                activeOpacity={0.7}
              >
                {renderCategoryIcon(cat, isSelected)}

                <Text
                  style={[
                    styles.cardLabel,
                    isSelected && styles.cardLabelSelected,
                  ]}
                >
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.sectionLabel}>Quick Actions</Text>

        <View style={styles.grid}>
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity
              key={action.key}
              style={styles.card}
              onPress={() => handleQuickAction(action.key)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={action.icon}
                size={22}
                color={action.accent ? GREEN : COLORS.text}
              />

              <Text style={[styles.cardLabel, styles.quickLabel]}>
                {action.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  banner: {
    width: '100%',
    height: 160,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.lg,
  },

  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },

  backBtn: {
    position: 'absolute',
    left: SPACING.lg,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
  },

  content: {
    padding: SPACING.lg,
    paddingBottom: SPACING.xl,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '31.5%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
    paddingHorizontal: 4,
  },

  cardSelected: {
    borderColor: GREEN,
  },

  cardLabel: {
    marginTop: SPACING.sm,
    fontSize: 12.5,
    fontWeight: '500',
    color: COLORS.text,
    textAlign: 'center',
  },

  cardLabelSelected: {
    color: GREEN,
    fontWeight: '600',
  },

  quickLabel: {
    fontWeight: '600',
    lineHeight: 16,
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },

  iconBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dualDot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: GREEN,
  },
});