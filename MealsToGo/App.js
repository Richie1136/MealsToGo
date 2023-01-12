import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';

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

  const MyTabs = () => (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <AppNavigator />
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