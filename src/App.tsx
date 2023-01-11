import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Button } from '@/components/elements';
import styled from 'styled-components/native';
import { theme } from '@/styles/theme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // const [viewResult, setViewResult] = useState('0');
  // const [currentResult, setCurrentResult] = useState(0);
  // const [savedResult, setSavedResult] = useState(0);
  // const [selectOperator, setSelectOperator] = useState('');
  const { width } = useWindowDimensions();
  const defaultButtonWidth = (width - 4) / 4;
  const defaultButtonHeight = defaultButtonWidth;

  // const numberInputResult = (number: string) => {
  //   if (currentResult === 0) {
  //     setViewResult(number);
  //     setCurrentResult(Number(number));
  //   } else {
  //     setViewResult(viewResult + number);
  //     setCurrentResult(Number(viewResult + number));
  //   }
  // };

  // const clearResult = () => {
  //   if (viewResult !== '0') {
  //     setViewResult('0');
  //     setCurrentResult(0);
  //     setSavedResult(0);
  //   }
  // };

  // const operatorHandler = (operator: string) => {
  //   setSelectOperator(operator);
  //   setCurrentResult(0);
  //   setSavedResult(Number(viewResult));
  // };

  // const operation = () => {
  //   let operationResult;
  //   if (selectOperator === '+') {
  //     operationResult = savedResult + currentResult;
  //   }

  //   if (selectOperator === '-') {
  //     operationResult = savedResult - currentResult;
  //   }

  //   setViewResult(String(operationResult));
  //   setCurrentResult(0);
  //   setSavedResult(operationResult as number);
  // };

  // =================================================== //
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState<(number | string)[]>([]);

  const onPressNumber = (num: number) => {
    const last = formula[formula.length - 1];

    if (typeof last !== 'number') {
      setResult(num);
      setFormula((prev) => [...prev, num]);
    } else {
      const newNumber = (last ?? 0) * 10 + num;
      setResult(newNumber);
      setFormula((prev) => {
        prev.pop();
        return [...prev, newNumber];
      });
    }
  };

  const calculate = () => {
    let claculatedNumber = 0;
    let operator: string;

    formula.forEach((value) => {
      if (typeof value === 'string' && ['+', '-'].includes(value)) {
        operator = value;
      } else {
        if (typeof value === 'number') {
          if (operator === '+') {
            claculatedNumber += value;
          } else if (operator === '-') {
            claculatedNumber -= value;
          } else {
            claculatedNumber = value;
          }
        }
      }
    });

    setResult(claculatedNumber);
    setFormula([]);
  };

  const onPressOperator = (operator: string) => {
    switch (operator) {
      case 'C':
        setResult(0);
        setFormula([]);
        break;
      case '=':
        calculate();
        break;
      default:
        const last = formula[formula.length - 1];
        if (typeof last === 'string' && ['+', '-'].includes(last)) {
          setFormula((prev) => {
            prev.pop();
            return [...prev, operator];
          });
        } else {
          setFormula((prev) => [...prev, operator]);
        }
        break;
    }
  };

  const operators = [{ text: 'C' }, { text: '-' }, { text: '+' }];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={'light'} />
      <AppWrapper>
        <ResultContainer>
          <ResultText>
            {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </ResultText>
        </ResultContainer>
        <ButtonContainer style={{ height: (width / 4) * 4 }}>
          <NumberContainer>
            <View style={styles.numberArea1}>
              {numbers.map((number) => (
                <Button
                  key={number}
                  title={number}
                  onPress={() => onPressNumber(Number(number))}
                  buttonStyle={{
                    marginTop: 1,
                    width: defaultButtonWidth,
                    height: defaultButtonHeight,
                  }}
                  buttonType="number"
                />
              ))}
            </View>
            <View style={styles.numberArea2}>
              <Button
                title="0"
                onPress={() => onPressNumber(0)}
                buttonStyle={{
                  width: defaultButtonWidth * 2 + 1,
                  height: defaultButtonHeight,
                }}
                buttonType="number"
              />
              <Button
                title="="
                onPress={() => onPressOperator('=')}
                buttonStyle={{
                  width: defaultButtonWidth,
                  height: defaultButtonHeight,
                }}
                buttonType="operator"
              />
            </View>
          </NumberContainer>
          <OperatorContainer>
            {operators.map((operator) => (
              <Button
                key={operator.text}
                title={operator.text}
                onPress={() => onPressOperator(operator.text)}
                buttonStyle={{
                  marginBottom: 1,
                  width: defaultButtonWidth,
                  height:
                    operator.text === '+'
                      ? defaultButtonHeight * 2
                      : defaultButtonHeight,
                }}
                buttonType="operator"
              />
            ))}
          </OperatorContainer>
        </ButtonContainer>
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled(View)`
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
  flex-direction: row;
  background-color: #000;
`;

const NumberContainer = styled.View`
  flex: 3;
`;

const OperatorContainer = styled.View``;

const styles = StyleSheet.create({
  numberArea1: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
  },
  numberArea2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
