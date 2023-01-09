export interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: {
    [key: string]: string | number;
  };
  buttonType: 'number' | 'operator';
}
