import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
padding: 16px;
color: rebeccapurple
`
const RestaurantCard = styled(Card)`
background-color: white
`
const RestaurantCardCover = styled(Card.Cover)`
background-color: white;
padding: 20px;
`

export const RestaurantInfo = ({ restaurant = {} }) => {

  const { name = 'Some rest',
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemp
  } = restaurant

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}