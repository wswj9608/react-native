import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';
import styled from 'styled-components/native';
import { zinc, amber } from '@/styles/palette';

const Button = ({ title, onPress, buttonStyle, buttonType }: ButtonProps) => {
  const buttonColor = (selectColor: number) => {
    if (buttonType === 'number') {
      return zinc[selectColor];
    } else {
      return amber[selectColor];
    }
  };

  return (
    <ButtonWrapper
      onPress={onPress}
      style={({ pressed }) => [
        buttonStyle,
        { backgroundColor: buttonColor(500) },
        pressed && { backgroundColor: buttonColor(700) },
      ]}
      buttonType={buttonType}
    >
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.Pressable<{ buttonType: 'number' | 'operator' }>`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 50px;
  font-weight: 700;
  color: #fff;
`;
