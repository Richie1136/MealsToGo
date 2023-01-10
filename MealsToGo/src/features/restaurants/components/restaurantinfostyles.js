import styled from 'styled-components/native';
import { Card } from 'react-native-paper';


export const Icon = styled.Image`
width: 15px;
height: 15px
`

export const Address = styled.Text`
font-size: ${({ theme }) => theme.fontSizes.caption}
font-family: ${({ theme }) => theme.fonts.body}
`
export const RestaurantCard = styled(Card)`
background-color: ${({ theme }) => theme.colors.bg.primary}
margin-bottom: ${({ theme }) => theme.space[3]}
`
export const RestaurantCardCover = styled(Card.Cover)`
background-color: ${({ theme }) => theme.colors.bg.primary};
padding: ${({ theme }) => theme.space[3]};
`

export const Info = styled.View`
padding: ${({ theme }) => theme.space[3]};
`

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Rating = styled.View`
flex-direction: row;
padding-top: ${({ theme }) => theme.space[2]};
padding-bottom: ${({ theme }) => theme.space[2]};
`