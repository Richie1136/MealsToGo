import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useState } from 'react';
import { RestaurantInfo } from '../restaurants/components/restaurantnfo'
import styled from 'styled-components/native';
import { SafeArea } from '../../components/utility/safe-area';
import { useContext } from 'react';
import { RestaurantsContext } from '../../services/restaurants/restaurants.context';
import { Search } from '../restaurants/components/search';


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
`

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  return (
    <SafeArea>
      <Search />
      {isLoading && <ActivityIndicator animating={true} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          )
        }}
        keyExtractor={(item) => item.name}

      />
    </SafeArea>
  )
}