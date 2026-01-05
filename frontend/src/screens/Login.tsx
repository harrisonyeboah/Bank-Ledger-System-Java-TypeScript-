import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import LoginBox from '../components/Login/loginBox';
import ForgotBox from '../components/Login/ForgotBox';
import FDICBadge from '../components/Login/FDICBadge';
import UbuntuText from '../components/UbuntuText';


import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const whiteGradient = { upper: '#f2f2f7', middle: '#f2f2f7', lower: '#f2f2f7' };

  let currentTimeGradient = whiteGradient;
  const [isLogin, setIsLogin] = useState(true);

  const ClickOnForgot = () => {
    Alert.alert('Forgot Info', 'Navigating to Forgot Password Screen');
  }
  const handleBoxChange = () => {
    setIsLogin(!isLogin);
  }
  const sendForgotRequest = () => {
    Alert.alert('We have sent a request to you.');
  }
  return (
    <LinearGradient
      colors={[currentTimeGradient.upper, currentTimeGradient.middle, currentTimeGradient.lower]}
      style={styles.gradient}
    >
      {isLogin === true ? <LoginBox boxChangeFunction={handleBoxChange} /> : <ForgotBox boxChangeFunction={handleBoxChange} handleForgotFunction={sendForgotRequest} />}
    </LinearGradient>

  );
}



const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center', // vertically center
    alignItems: 'center',     // horizontally center
    padding: 20,
  }
});
