import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/Spacer';

const Title = styled.Text`
font-size: ${({ theme }) => theme.fontSizes.body}
color: ${({ theme }) => theme.colors.ui.primary};
font-family: ${({ theme }) => theme.fonts.heading}
`
const Address = styled.Text`
font-size: ${({ theme }) => theme.fontSizes.caption}
font-family: ${({ theme }) => theme.fonts.body}
`
const RestaurantCard = styled(Card)`
background-color: ${({ theme }) => theme.colors.bg.primary}
`
const RestaurantCardCover = styled(Card.Cover)`
background-color: ${({ theme }) => theme.colors.bg.primary};
padding: ${({ theme }) => theme.space[3]};
`

const Info = styled.View`
padding: ${({ theme }) => theme.space[3]};
`

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Rating = styled.View`
flex-direction: row;
padding-top: ${({ theme }) => theme.space[2]};
padding-bottom: ${({ theme }) => theme.space[2]};
`

export const RestaurantInfo = ({ restaurant = {} }) => {

  const { name = 'Some rest',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemp
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))
  console.log(ratingArray)

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemp && (
              <Text variant="label" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}