import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { RestaurantInfo } from '../restaurants/components/restaurantnfo'
import styled from 'styled-components/native';


const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
padding: 16px;
`;
const ListContainer = styled.View`
flex: 1;
padding: 16px;
background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfo />
    </ListContainer>
  </SafeArea>
)