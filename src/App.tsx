import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { Button } from './components/elements';
// import styled from 'styled-components/native';
import styled from './styles/styled-components';
// import { darkTheme, lightTheme } from './styles/theme';
import { theme } from './styles/theme';

export default function App() {
  const isDark = useColorScheme() === 'dark';

  // const theme = {
  //   darkMode: {
  //     mainBgColor: '#263238',
  //     textColor: '#FFFFFF',
  //   },
  //   lightMode: {
  //     mainBgColor: '#FFFFFF',
  //     textColor: '#263238',
  //   },
  // };

  // const theme: DefaultTheme = {
  //   mainBgColor: isDark ? '#263238' : '#FFFFFF',
  //   textColor: isDark ? '#FFFFFF' : '#263238',
  // };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Text>Open App.tsx to start working on your app!</Text>
        <Button
          title={'button'}
          // onPress={() => console.log('1111')}
          // accessibilityLabel="Learn more about this purple button"
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
