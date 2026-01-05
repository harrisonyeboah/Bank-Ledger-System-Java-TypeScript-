import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeIcon from "../../assets/icons/Home.svg";
import TransferMoney from "../../assets/icons/TransferMoney.svg";
import Invest from "../../assets/icons/Invest.svg"; 
import OurServices from "../../assets/icons/OurServices.svg"; 
import { useNavigation } from '@react-navigation/native';






const BottomNavBar: React.FC = () => {
  /*  This is the nav bar there is navgations SVG files such as home icon, transfer money, invest and our services*/
    const navigation = useNavigation<any>();
  return (
  <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Home');}}>
        <HomeIcon width={30} height={30} color={'#003366'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Transfers');}}>
        <TransferMoney width={30} height={30} color={'#003366'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Invest');}}>
        <Invest width={30} height={30} color={'#003366'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Services');}}>
        <OurServices width={30} height={30} color={'#003366'} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
    container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 20,
    },
navText: {
  fontSize: 10,
  fontWeight: 'bold',
  color: '#003366',
}});
