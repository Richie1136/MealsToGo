import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
padding: 16px;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});