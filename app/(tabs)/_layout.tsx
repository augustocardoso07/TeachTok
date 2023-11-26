import { BookmarksIcon, CompassIcon, HomeIcon, ProfileIcon, TimerIcon } from '@@/assets/icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <HomeIcon style={{ marginBottom: -3 }} opacity={focused ? '1' : '0.45'} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ focused }) => <CompassIcon style={{ marginBottom: -3 }} opacity={focused ? '1' : '0.45'} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ focused }) => <TimerIcon style={{ marginBottom: -3 }} opacity={focused ? '1' : '0.45'} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ focused }) => <BookmarksIcon style={{ marginBottom: -3 }} opacity={focused ? '1' : '0.45'} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon style={{ marginBottom: -3 }} opacity={focused ? '1' : '0.45'} />,
        }}
      />
    </Tabs>
  );
}
