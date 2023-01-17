import { StyleSheet, TextInput, Text, View } from 'react-native';
import { InputProps } from './type';

const Input = ({
  title,
  placeholder,
  name,
  onChangeText,
  ...rest
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        onChangeText={(text) => onChangeText(text, name)}
        placeholder={placeholder ?? title}
        placeholderTextColor="#a3a3a3"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 42,
  },
});

export default Input;
