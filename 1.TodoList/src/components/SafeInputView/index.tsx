import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  Pressable,
  View,
} from 'react-native';

const SafeInputView = ({ children }: KeyboardAvoidingViewProps) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.select({ ios: 'padding' })}
    contentContainerStyle={{ flex: 1 }}
  >
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      {children}
    </Pressable>
  </KeyboardAvoidingView>
);

export default SafeInputView;
