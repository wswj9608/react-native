import { useState } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { Button } from '@/components/elements';
import styled from 'styled-components/native';
// import { darkTheme, lightTheme } from './styles/theme';
import { theme } from '@/styles/theme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [result, setResult] = useState(0);
  const { width, height } = useWindowDimensions();
  console.log(width);
  console.log(height);
  const defaultButtonWidth = width / 4;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={'light'} />
      <AppWrapper>
        <ResultContainer>
          <ResultText>{result}</ResultText>
        </ResultContainer>
        <ButtonContainer>
          <NumberContainer>
            <View style={styles.numberArea1}>
              <Button
                title="1"
                onPress={() => console.log('1')}
                buttonStyle={{
                  width: defaultButtonWidth,
                  height: defaultButtonWidth,
                }}
                buttonType="number"
              />
            </View>
            <View style={styles.numberArea2}></View>
          </NumberContainer>
          <OperatorContainer></OperatorContainer>
        </ButtonContainer>
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

const ResultContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #000;
`;

const ResultText = styled.Text`
  font-size: 50px;
  color: #fff;
  padding: 30px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  background-color: papayawhip;
  flex-direction: row;
`;

const NumberContainer = styled.View`
  flex: 3;
  background-color: antiquewhite;
`;

const OperatorContainer = styled.View`
  flex: 1;
  background-color: aqua;
`;

const styles = StyleSheet.create({
  numberArea1: {
    flex: 3,
    backgroundColor: 'red',
  },
  numberArea2: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
