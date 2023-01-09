import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: 'margin-top',
  left: 'margin-left',
  bottom: 'margin-bottom',
  right: 'margin-right',
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizes[size]
  const property = positions[position]
  const value = theme.space[sizeIndex]
  console.log(value)
  return `${property}:${value}`
}

export const Spacer = styled.View`
${({ position, size, theme }) => getVariant(position, size, theme)}
`
Spacer.defualtProps = {
  position: "top",
  size: "small"
}