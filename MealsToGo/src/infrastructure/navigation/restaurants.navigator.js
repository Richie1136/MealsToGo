import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantDetailsScreen } from '../../features/screens/restaurantdetailsscreen'
import { RestaurantsScreen } from '../../features/screens/restaurantscreen'

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator headerMode="none" screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}>
    <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
    <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailsScreen} />
  </RestaurantStack.Navigator>
)