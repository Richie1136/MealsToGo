import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/screens/restaurantscreen';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';


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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <Text>Map</Text>
    </View>
  )

  const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  )

  const Tab = createBottomTabNavigator()


  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <RestaurantsScreen /> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
  );
}