import { SafeAreaView, View, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { RestaurantInfo } from '../restaurants/components/restaurantnfo'
import styled from 'styled-components/native';


const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})`
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }]}
      renderItem={() => <RestaurantInfo />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
)