import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADIUS } from '../../constants/theme';

const FILTERS = ['All', 'Reported', 'In Progress', 'Resolved'];

const ISSUES = [
  {
    id: '1',
    title: 'Broken streetlight',
    category: 'Electricity',
    status: 'In Progress',
  },
  {
    id: '2',
    title: 'Overflowing waste',
    category: 'Waste',
    status: 'Reported',
  },
  {
    id: '3',
    title: 'Water leakage',
    category: 'Water',
    status: 'Resolved',
  },
  {
    id: '4',
    title: 'Pothole on main road',
    category: 'Roads',
    status: 'Reported',
  },
];

export default function SearchAndFilterScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredIssues = ISSUES.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      selectedFilter === 'All' || issue.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Search & Filter</Text>

        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../../assets/Search and filter.jpeg')}
          style={styles.banner}
        />

        <Text style={styles.heading}>Search Issues</Text>

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={20}
            color={COLORS.textMuted}
          />

          <TextInput
            style={styles.input}
            placeholder="Search for an issue..."
            placeholderTextColor={COLORS.textMuted}
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons
                name="close-circle"
                size={20}
                color={COLORS.textMuted}
              />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.heading}>Filter by Status</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {FILTERS.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.selectedFilter,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.selectedFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.resultsHeader}>
          <Text style={styles.heading}>Results</Text>

          <Text style={styles.resultCount}>
            {filteredIssues.length} issue
            {filteredIssues.length !== 1 ? 's' : ''}
          </Text>
        </View>

        {filteredIssues.map((issue) => (
          <TouchableOpacity
            key={issue.id}
            style={styles.issueCard}
            activeOpacity={0.7}
            onPress={() => {}}
          >
            <View style={styles.issueIcon}>
              <Ionicons
                name="alert-circle-outline"
                size={25}
                color={COLORS.text}
              />
            </View>

            <View style={styles.issueInfo}>
              <Text style={styles.issueTitle}>{issue.title}</Text>
              <Text style={styles.category}>{issue.category}</Text>
              <Text style={styles.status}>{issue.status}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={COLORS.textMuted}
            />
          </TouchableOpacity>
        ))}

        {filteredIssues.length === 0 && (
          <View style={styles.empty}>
            <Ionicons
              name="search-outline"
              size={40}
              color={COLORS.textMuted}
            />

            <Text style={styles.emptyText}>No issues found</Text>

            <Text style={styles.emptySubtext}>
              Try another search or filter.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
  },

  content: {
    paddingBottom: SPACING.xl,
  },

  banner: {
    width: '100%',
    height: 160,
    marginBottom: SPACING.lg,
  },

  heading: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.md,
    height: 48,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  input: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontSize: 14,
    color: COLORS.text,
  },

  filterContainer: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
    gap: SPACING.sm,
  },

  filterButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.card,
  },

  selectedFilter: {
    backgroundColor: '#3E7C48',
    borderColor: '#3E7C48',
  },

  filterText: {
    fontSize: 13,
    color: COLORS.text,
  },

  selectedFilterText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: SPACING.lg,
  },

  resultCount: {
    fontSize: 12,
    color: COLORS.textMuted,
  },

  issueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.sm,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  issueIcon: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.sm ?? 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E6DF',
    marginRight: SPACING.sm,
  },

  issueInfo: {
    flex: 1,
  },

  issueTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 3,
  },

  category: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 3,
  },

  status: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3E7C48',
  },

  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },

  emptyText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: SPACING.sm,
  },

  emptySubtext: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginTop: 4,
  },
});