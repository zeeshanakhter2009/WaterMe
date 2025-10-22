import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tabIcons: Record<string, keyof typeof MaterialCommunityIcons.glyphMap> = {
  index: 'home-outline',
  history: 'calendar-month-outline',
  badges: 'medal-outline',
  settings: 'cog-outline'
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0B3954',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name={tabIcons[route.name]} size={size} color={color} />
        )
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />
      <Tabs.Screen name="badges" options={{ title: 'Badges' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
