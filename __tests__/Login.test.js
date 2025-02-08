import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Login from '../src/pages/Login';

describe('Login Bileşeni', () => {
    test('E-posta ve şifre girilmeden giriş yapılmaz', () => {
      render(<Login onSubmit={() => {}} />);
  
      // E-posta ve şifre boşken giriş yapılmaya çalış
      fireEvent.press(screen.getByTestId('login-button'));
  
      // Hata mesajı doğru yazılmamış
      expect(screen.getByTestId('error-text').children[0]).toContain('Email ve şifre gereklidir');
    });

  test('Geçerli e-posta ve şifre ile giriş yapılır', () => {
    const mockSubmit = jest.fn();
    
    render(<Login onSubmit={mockSubmit} />);
    
    // E-posta ve şifreyi doldur
    fireEvent.changeText(screen.getByTestId('email-input'), 'user@example.com');
    fireEvent.changeText(screen.getByTestId('password-input'), '');
    
    // Giriş butonuna tıkla
    fireEvent.press(screen.getByTestId('login-button'));
    // onSubmit fonksiyonunun çağrıldığını doğrula
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123'
    });
  });

  test('Hata mesajı sadece boş alanlarda görünür', () => {
    render(<Login onSubmit={() => {}} />);
    
    // E-posta gir, şifreyi boş bırak
    fireEvent.changeText(screen.getByTestId('email-input'), 'user@example.com');
    
    fireEvent.press(screen.getByTestId('login-button'));
    
    // Hata mesajı gösterilmeli
    expect(screen.queryByTestId('error-text')).toBeTruthy();
  });
});
