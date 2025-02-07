import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';  // Test edilecek bileşen

test('it renders the welcome message', () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText('Welcome to Expo!');
  
  // Mesajın doğru şekilde render edilip edilmediğini kontrol et
  expect(welcomeMessage).toBeTruthy();
});
