import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView, TextInput } from 'react-native';
import LoginBox from '../components/Login/loginBox';
import ForgotBox from '../components/Login/ForgotBox';
import FDICBadge from '../components/Login/FDICBadge';
import UbuntuText from '../components/UbuntuText';
import TypeOfAccount from '../components/Home/CheckingBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import Transactions from '../components/Home/Transactions';
import { LinearGradient } from 'expo-linear-gradient';
import SpendingGraph from '../components/Home/SpendingGraph';
import BottomNavBar from '../components/BottomNavbar';
import InvestmentBalanceBox from '../components/Invest/InvestmentBalanceBox';
import StockGraphComponent from '../components/Invest/StockGraphComponent';
import FeaturedStocks from '../components/Invest/FeaturedStocks';

export default function Invest() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // e.g., "3:45:12 PM"
  const morningGradient = { upper: '#A3CEF1', middle: '#69B3E7', lower: '#1E90FF' };
  const afternoonGradient = { upper: '#87CEFA', middle: '#0090c1ff', lower: '#0e82f7ff' };
  const eveningTimeGradient = { upper: '#32608fff', middle: '#072f57ff', lower: '#003366' }
  const nightTimeGradient = { upper: '#1a1a2e', middle: '#0f3057', lower: '#001f3f' };
  const defaultGradient = { upper: '#32608fff', middle: '#7693acff', lower: '#ffffff' };

  const whiteGradient = { upper: '#f2f2f7', middle: '#f2f2f7', lower: '#f2f2f7' };

  let currentTimeGradient = whiteGradient;
  const [text, setText] = useState('');

  const featuredStocks = [
    { ticker: 'AAPL', price: 145.32, percentSinceLastInvested: 2.5 },
    { ticker: 'GOOG', price: 2735.65, percentSinceLastInvested: -1.2 },
    { ticker: 'AMZN', price: 3342.88, percentSinceLastInvested: 0.8 },
    { ticker: 'MSFT', price: 299.01, percentSinceLastInvested: 1.7 },
    { ticker: 'TSLA', price: 720.45, percentSinceLastInvested: -0.5 },
    { ticker: 'NFLX', price: 525.12, percentSinceLastInvested: 3.1 },
    { ticker: 'NVDA', price: 195.33, percentSinceLastInvested: 4.2 },
    { ticker: 'FB', price: 332.45, percentSinceLastInvested: -2.3 },
  ];

  <FeaturedStocks allFeaturedStocks={featuredStocks} />


  return (
    <LinearGradient
      colors={[currentTimeGradient.upper, currentTimeGradient.middle, currentTimeGradient.lower]}
      style={styles.gradient}
    >

      <ScrollView>
        <InvestmentBalanceBox></InvestmentBalanceBox>
        <TextInput style={styles.input} placeholder="Search Ticker" value={text} onChangeText={setText} />
        <StockGraphComponent ticker="APPL" price={25.99} data={[{ value: 50 }, { value: 80 }, { value: 40 }, { value: 95 }, { value: 75 }, { value: 60 }, { value: 100 }, { value: 85 }, { value: 90 }, { value: 70 }, { value: 95 }, { value: 110 }, { value: 120 }, { value: 105 }, { value: 130 }, { value: 125 }, { value: 140 }, { value: 135 }, { value: 150 }, { value: 145 }, { value: 160 }, { value: 155 }, { value: 170 }, { value: 165 }, { value: 180 }, { value: 175 }, { value: 190 }, { value: 185 }, { value: 200 }, { value: 195 }]}></StockGraphComponent>
        <FeaturedStocks allFeaturedStocks={featuredStocks}></FeaturedStocks>
      </ScrollView>
      <View style={styles.navBarDiv}>
        <BottomNavBar></BottomNavBar>
      </View>
    </LinearGradient>


  );
}



const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },
  greetingsTitle: {
    marginTop: 75,     // space from top / status bar
    marginLeft: 0,     // aligns to left
    color: '#003366',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: .5,
    borderColor: '#003366',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#003366',
    marginTop: 20,
  },
  navBarDiv: {
    position: 'absolute',      // position relative to parent/screen
    bottom: 0,                 // stick to bottom
    left: 0,
    right: 0,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderTopColor: '#e6e6e6ff',
    elevation: 5,              // shadow on Android
    zIndex: 10,
  }             // ensure it appears on top
})
