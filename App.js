import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommunityActionScreen from './screens/resolution/CommunityActionScreen';
import MissionDetailsScreen from './screens/resolution/MissionDetailsScreen';
import ResolutionUpdateScreen from './screens/resolution/ResolutionUpdateScreen';
import VerifyResolutionScreen from './screens/resolution/VerifyResolutionScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import LeaderboardScreen from './screens/profile/LeaderboardScreen';
import MunicipalityDashboardScreen from './screens/admin/MunicipalityDashboardScreen';
import DevMenuScreen from './screens/DevMenuScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DevMenu">
        <Stack.Screen name="CommunityAction" component={CommunityActionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MissionDetails" component={MissionDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResolutionUpdate" component={ResolutionUpdateScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyResolution" component={VerifyResolutionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MunicipalityDashboard" component={MunicipalityDashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DevMenu" component={DevMenuScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}