import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ReportIssueStep1Screen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Report an Issue (Step 1)
        </Text>

        <View style={styles.emptySpace} />

      </View>

      {/* ADD PHOTOS */}
      <Text style={styles.label}>
        Add Photos
      </Text>

      <View style={styles.photosRow}>

        {/* PHOTO 1 */}
        <View style={styles.photoBox}>
          <Text style={styles.photoIcon}>📷</Text>

          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* PHOTO 2 */}
        <View style={styles.photoBox}>
          <Text style={styles.photoIcon}>📷</Text>

          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* PHOTO 3 */}
        <View style={styles.photoBox}>
          <Text style={styles.photoIcon}>📷</Text>

          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* ADD PHOTO */}
        <TouchableOpacity style={styles.addPhotoBox}>
          <Text style={styles.plus}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      {/* LOCATION */}
      <Text style={styles.label}>
        Location
      </Text>

      {/* MAP PLACEHOLDER */}
      <View style={styles.mapBox}>

        <Text style={styles.mapText}>
          📍
        </Text>

      </View>

      {/* LOCATION ADDRESS */}
      <View style={styles.locationBox}>

        <Text style={styles.locationPin}>
          ♧
        </Text>

        <Text style={styles.locationText}>
          University of Buea, Buea, Cameroon
        </Text>

        <TouchableOpacity>
          <Text style={styles.editText}>
            ✎
          </Text>
        </TouchableOpacity>

      </View>

      {/* NEXT BUTTON */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ReportIssueStep2')}
      >
        <Text style={styles.nextText}>
          Next
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 30,
  },

  /* HEADER */

  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backArrow: {
    fontSize: 30,
    color: '#222222',
    lineHeight: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },

  emptySpace: {
    width: 30,
  },

  /* LABEL */

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111111',
    marginBottom: 8,
  },

  /* PHOTOS */

  photosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  photoBox: {
    width: 58,
    height: 58,
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  photoIcon: {
    fontSize: 22,
  },

  removeButton: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeText: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 16,
  },

  addPhotoBox: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plus: {
    fontSize: 30,
    fontWeight: '300',
    color: '#222222',
  },

  /* MAP */

  mapBox: {
    height: 175,
    borderRadius: 7,
    backgroundColor: '#E9EEF1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    overflow: 'hidden',
  },

  mapText: {
    fontSize: 35,
  },

  /* LOCATION */

  locationBox: {
    height: 45,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationPin: {
    fontSize: 17,
    color: '#555555',
    marginRight: 8,
  },

  locationText: {
    flex: 1,
    fontSize: 12,
    color: '#444444',
  },

  editText: {
    fontSize: 18,
    color: '#555555',
  },

  /* NEXT */

  nextButton: {
    height: 45,
    backgroundColor: '#079447',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  nextText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

});