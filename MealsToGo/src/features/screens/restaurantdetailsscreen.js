import { RestaurantInfo } from "../restaurants/components/restaurantnfo"
import { SafeArea } from "../../components/utility/safe-area"
import { List } from "react-native-paper"
import { ScrollView } from "react-native"

import { useState } from "react"

export const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)

  const { restaurant } = route.params
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion title="Breakfast" left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Waffles" />
          <List.Item title="Pancakes" />
        </List.Accordion>
        <List.Accordion title="Lunch" left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger with Fries" />
          <List.Item title="Sandwich" />
          <List.Item title="Soup" />
        </List.Accordion>
        <List.Accordion title="Dinner" left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Seafood" />
          <List.Item title="Pasta" />
          <List.Item title="Steak" />
        </List.Accordion>
        <List.Accordion title="Drinks" left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Beer" />
          <List.Item title="Soda" />
          <List.Item title="Smoothie" />
          <List.Item title="Shake" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}