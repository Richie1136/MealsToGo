import { FlatList } from 'react-native';
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

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext)
  return (
    <SafeArea>
      <Search />
      {isLoading && <ActivityIndicator animating={true} />}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item)
          return (
            <RestaurantInfo restaurant={item} />
          )
        }}
        keyExtractor={(item) => item.name}

      />
    </SafeArea>
  )
}