import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
