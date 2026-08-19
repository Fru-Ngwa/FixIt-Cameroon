import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- Onboarding & Authentication ---
import SplashScreen from './screens/onboarding/SplashScreen';
import Onboarding1Screen from './screens/onboarding/Onboarding1Screen';
import Onboarding2Screen from './screens/onboarding/Onboarding2Screen';
import Onboarding3Screen from './screens/onboarding/Onboarding3Screen';
import LoginScreen from './screens/onboarding/LoginScreen';
import SignUpScreen from './screens/onboarding/SignUpScreen';

// --- Home & Discover ---
import HomeScreen from './screens/home/HomeScreen';
import CategoriesScreen from './screens/home/CategoriesScreen';
import MapviewScreen from './screens/home/MapviewScreen';
import SearchAndFilterScreen from './screens/home/SearchAndFilterScreen';
import IssueDetailsScreen from './screens/home/IssueDetailsScreen';

// --- Reporting Flow ---
import ReportIssueStep1Screen from './screens/reporting/ReportIssueStep1Screen';
import ReportIssueStep2Screen from './screens/reporting/ReportIssueStep2Screen';
import ReportIssueStep3Screen from './screens/reporting/ReportIssueStep3Screen';
import DuplicateCheckScreen from './screens/reporting/DuplicateCheckScreen';
import SubmissionSuccessScreen from './screens/reporting/SubmissionSuccessScreen';

// --- Resolution & Community Action ---
import CommunityActionScreen from './screens/resolution/CommunityActionScreen';
import MissionDetailsScreen from './screens/resolution/MissionDetailsScreen';
import ResolutionUpdateScreen from './screens/resolution/ResolutionUpdateScreen';
import VerifyResolutionScreen from './screens/resolution/VerifyResolutionScreen';

// --- Profile & Community ---
import ProfileScreen from './screens/profile/ProfileScreen';
import LeaderboardScreen from './screens/profile/LeaderboardScreen';

// --- Admin / Municipal Dashboard ---
import MunicipalityDashboardScreen from './screens/admin/MunicipalityDashboardScreen';

// --- Additional Screens ---
import MyReportsScreen from './screens/extras/MyReportsScreen';
import NotificationsScreen from './screens/extras/NotificationsScreen';
import CommentsScreen from './screens/extras/CommentsScreen';
import BookmarksScreen from './screens/extras/BookmarksScreen';
import SponsorsScreen from './screens/extras/SponsorsScreen';
import OrganizationsScreen from './screens/extras/OrganizationsScreen';
import AnalyticsScreen from './screens/extras/AnalyticsScreen';

// NOTE: AuthProvider / JWT context is not wired in yet since the backend
// isn't built. Once ready, wrap NavigationContainer with AuthProvider and
// gate screens behind login state.

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          {/* Onboarding & Authentication */}
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
          <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
          <Stack.Screen name="Onboarding3" component={Onboarding3Screen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />

          {/* Home & Discover */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Mapview" component={MapviewScreen} />
          <Stack.Screen name="SearchAndFilter" component={SearchAndFilterScreen} />
          <Stack.Screen name="IssueDetails" component={IssueDetailsScreen} />

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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}