import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: "fast-food",
  Settings: "settings",
  Map: "md-map"
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />

    )
  }
}

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}
      tabBarOption={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
      <Tab.Screen name='Map' component={MapScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)