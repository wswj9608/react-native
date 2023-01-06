import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';
import styled from 'styled-components/native';

const Button = ({ title }: ButtonProps) => {
  return (
    <ButtonWrapper onPress={() => console.log('click')}>
      <Text>{title}</Text>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px 20px;
`;
