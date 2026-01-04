import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import UbuntuText from './UbuntuText';
import { MaterialIcons } from '@expo/vector-icons';
import HomeIcon from "../../assets/icons/Home.svg";
import TransferMoney from "../../assets/icons/TransferMoney.svg";
import Invest from "../../assets/icons/Invest.svg"; 
import OurServices from "../../assets/icons/OurServices.svg"; 
import { useNavigation } from '@react-navigation/native';






const InvestmentBalanceBox: React.FC = () => {
    const navigation = useNavigation<any>();
  return (
  <View style={styles.container}>
        <Text style={styles.yourBalanceText}>  Trading Balance </Text>
        <Text style={styles.yourActualBalanceText}> $83.39 </Text>
  
    </View>
  );
};

export default InvestmentBalanceBox;

const styles = StyleSheet.create({
  container: {         
  marginTop: 75,         


  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 7,

  elevation: 4,
},
    yourBalanceText: {
        color: '#003366',
        fontSize: 15, 
        fontWeight: '300'
    },
yourActualBalanceText: {
    color: '#003366',
    fontSize: 30
}, 
});
