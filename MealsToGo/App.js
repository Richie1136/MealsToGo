import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/screens/restaurantscreen';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area';
import { Ionicons } from '@expo/vector-icons'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  const MapScreen = () => (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  )

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

  const MyTabs = () => (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}
            tabBarOption={{
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray'
            }}
          >
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <MyTabs />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
  );
}