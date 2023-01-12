import { Text, View, Image } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

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
  return `${property}:${value}`
}

const SpacerView = styled.View`
${({ variant }) => variant}
`

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme()
  const variant = getVariant(position, size, theme)
  return (
    <SpacerView variant={variant}>
      {children}
    </SpacerView>
  )
}

Spacer.defualtProps = {
  position: "top",
  size: "small"
}