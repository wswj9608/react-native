import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  title: string;
  name?: string;
  onChangeText: (text: string, name?: string) => void;
}
