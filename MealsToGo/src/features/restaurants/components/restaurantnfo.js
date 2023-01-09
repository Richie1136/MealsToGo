import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
padding: ${({ theme }) => theme.space[3]};
color: ${({ theme }) => theme.colors.ui.primary}
`
const RestaurantCard = styled(Card)`
background-color: ${({ theme }) => theme.colors.bg.primary}
`
const RestaurantCardCover = styled(Card.Cover)`
background-color: ${({ theme }) => theme.colors.bg.primary};
padding: ${({ theme }) => theme.space[3]};
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