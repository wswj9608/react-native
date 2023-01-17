import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { main } from '@/assets';
import { Input } from '@/elements';
import SafeInputView from '@/components/SafeInputView';
import { useState } from 'react';

const SignInScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const inputHandler = (text: string, name: string | undefined) => {
    if (name) {
      setInputs({ ...inputs, [name]: text });
    }
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image style={styles.image} source={main} />
        <Input
          name="email"
          title="Email"
          placeholder="your@email.com"
          keyboardType="email-address"
          returnKeyType="next"
          value={email}
          onChangeText={inputHandler}
        />
        <Input
          name="password"
          title="Password"
          placeholder="Password"
          returnKeyType="done"
          secureTextEntry
          value={password}
          onChangeText={inputHandler}
        />
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
