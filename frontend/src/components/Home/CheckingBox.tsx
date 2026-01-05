import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FDICBadge from '../Login/FDICBadge';
import UbuntuText from '../UbuntuText';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LoginBoxProps } from '../Login/LoginBoxProps';
interface CheckingBoxProps {
  typeOfAccount: string
  balance: number
}
const CheckingBox: React.FC<CheckingBoxProps> = ({ typeOfAccount, balance }) => {
  /* This the checking box this basically takes in typeOfAccountProp and Balance  */
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.innerContainerText}> {typeOfAccount} </Text>
        <Text style={styles.innerContainerText}> ${balance} </Text>
      </View>
    </View>
  );
};

export default CheckingBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainerText: {
    color: "#003366",
    fontWeight: 'bold',
    fontSize: 15
  }



});
