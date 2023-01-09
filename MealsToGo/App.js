import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/screens/restaurantscreen';
import { theme } from './src/infrastructure/theme';

export default function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
  );
}