import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(Number);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email ve şifre gereklidir');
      return;
    }
    
    onSubmit({ email, password });
  };

  return (
    <View>
      <TextInput
        testID="email-input"
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        testID="password-input"
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text testID="error-text">{error}</Text> : null}
      <Button testID="login-button" title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

export default Login;
