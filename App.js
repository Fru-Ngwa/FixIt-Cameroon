import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- Reporting Flow (teammate) ---
import ReportIssueStep1Screen from './screens/reporting/ReportIssueStep1';
import ReportIssueStep2Screen from './screens/reporting/ReportIssueStep2';
import ReportIssueStep3Screen from './screens/reporting/ReportIssueStep3';
import DuplicateCheckScreen from './screens/reporting/DuplicateCheck';
import SubmissionSuccessScreen from './screens/reporting/SubmissionSuccess';

// --- Row 4: Resolution & Community Action ---
import CommunityActionScreen from './screens/resolution/CommunityActionScreen';
import MissionDetailsScreen from './screens/resolution/MissionDetailsScreen';
import ResolutionUpdateScreen from './screens/resolution/ResolutionUpdateScreen';
import VerifyResolutionScreen from './screens/resolution/VerifyResolutionScreen';

// --- Row 4: Profile & Community ---
import ProfileScreen from './screens/profile/ProfileScreen';
import LeaderboardScreen from './screens/profile/LeaderboardScreen';

// --- Row 4: Admin / Municipal Dashboard ---
import MunicipalityDashboardScreen from './screens/admin/MunicipalityDashboardScreen';

// --- Additional Screens ---
import MyReportsScreen from './screens/extras/MyReportsScreen';
import NotificationsScreen from './screens/extras/NotificationsScreen';
import CommentsScreen from './screens/extras/CommentsScreen';
import BookmarksScreen from './screens/extras/BookmarksScreen';
import SponsorsScreen from './screens/extras/SponsorsScreen';
import OrganizationsScreen from './screens/extras/OrganizationsScreen';
import AnalyticsScreen from './screens/extras/AnalyticsScreen';

// --- Dev only: temporary menu for jumping between screens during testing ---
import DevMenuScreen from './screens/DevMenuScreen';

// TODO (teammates): import Onboarding/Auth and Home/Discover screens here
// once ready, e.g.:
// import SplashScreen from './screens/onboarding/SplashScreen';
// import HomeScreen from './screens/home/HomeScreen';

// NOTE: AuthProvider / context is not wired in yet since the backend isn't
// built. Once JWT auth is ready, wrap NavigationContainer with AuthProvider
// (see context/AuthContext.js) and gate screens behind login state.

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DevMenu"
          screenOptions={{ headerShown: false }}
        >
          {/* Dev menu - remove once real navigation flow is wired */}
          <Stack.Screen name="DevMenu" component={DevMenuScreen} />

          {/* Reporting Flow */}
          <Stack.Screen name="ReportIssueStep1" component={ReportIssueStep1Screen} />
          <Stack.Screen name="ReportIssueStep2" component={ReportIssueStep2Screen} />
          <Stack.Screen name="ReportIssueStep3" component={ReportIssueStep3Screen} />
          <Stack.Screen name="DuplicateCheck" component={DuplicateCheckScreen} />
          <Stack.Screen name="SubmissionSuccess" component={SubmissionSuccessScreen} />

          {/* Resolution & Community Action */}
          <Stack.Screen name="CommunityAction" component={CommunityActionScreen} />
          <Stack.Screen name="MissionDetails" component={MissionDetailsScreen} />
          <Stack.Screen name="ResolutionUpdate" component={ResolutionUpdateScreen} />
          <Stack.Screen name="VerifyResolution" component={VerifyResolutionScreen} />

          {/* Profile & Community */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />

          {/* Admin / Municipal Dashboard */}
          <Stack.Screen name="MunicipalityDashboard" component={MunicipalityDashboardScreen} />

          {/* Additional Screens */}
          <Stack.Screen name="MyReports" component={MyReportsScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Comments" component={CommentsScreen} />
          <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
          <Stack.Screen name="Sponsors" component={SponsorsScreen} />
          <Stack.Screen name="Organizations" component={OrganizationsScreen} />
          <Stack.Screen name="Analytics" component={AnalyticsScreen} />

          {/* TODO (teammates): add your remaining Stack.Screen entries here */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}