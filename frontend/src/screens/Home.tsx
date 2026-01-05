import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import CheckingBox from '../components/CheckingBox';
import SavingBox from  '../components/SavingBox';
import Transactions from '../components/Transactions';
import { LinearGradient } from 'expo-linear-gradient';
import SpendingGraph from '../components/SpendingGraph';
import BottomNavBar from '../components/BottomNavbar';

const UserBox = () => {
  
  return (
    <View style={styles.userBoxContainer}>
        <CheckingBox typeOfAccount='Checking' balance={12.42}></CheckingBox>
        <SavingBox balance={2000.90} typeOfAccount={"Savings"}></SavingBox>
    </View>
  )
}

export default function Home() {

  const transactions = [
  {
    "date": "12/29",
    "method": "Debit",
    "vendor": "McDonalds",
    "amount": 8.99
  },
  {
    "date": "12/28",
    "method": "Debit",
    "vendor": "Starbucks",
    "amount": 5.75
  },
  {
    "date": "12/27",
    "method": "Debit",
    "vendor": "Amazon",
    "amount": 42.13
  },
  {
    "date": "12/26",
    "method": "Debit",
    "vendor": "Target",
    "amount": 67.42
  },
  {
    "date": "12/25",
    "method": "Debit",
    "vendor": "Uber",
    "amount": 14.86
  },
  {
    "date": "12/24",
    "method": "Debit",
    "vendor": "Whole Foods",
    "amount": 93.28
  },
  {
    "date": "12/23",
    "method": "Debit",
    "vendor": "Apple",
    "amount": 129.00
  },
  {
    "date": "12/22",
    "method": "Debit",
    "vendor": "Netflix",
    "amount": 15.99
  },
  {
    "date": "12/21",
    "method": "Debit",
    "vendor": "Shell Gas",
    "amount": 38.67
  },
  {
    "date": "12/20",
    "method": "Debit",
    "vendor": "Chipotle",
    "amount": 11.54
  }
]


  const now = new Date();
  const timeString = now.toLocaleTimeString(); // e.g., "3:45:12 PM"
  const morningGradient = { upper: '#A3CEF1', middle: '#69B3E7', lower: '#1E90FF' };
  const afternoonGradient = { upper: '#87CEFA', middle: '#0090c1ff', lower: '#0e82f7ff' };
  const eveningTimeGradient = { upper: '#32608fff', middle: '#072f57ff', lower: '#003366' }
  const nightTimeGradient = { upper: '#1a1a2e', middle: '#0f3057', lower: '#001f3f' };
  const defaultGradient = { upper: '#32608fff', middle: '#7693acff', lower: '#ffffff' };
  const whiteGradient = { upper: '#f2f2f7', middle: '#f2f2f7', lower: '#f2f2f7' };

  let currentTimeGradient = whiteGradient;

  return (
    <LinearGradient
      colors={[currentTimeGradient.upper, currentTimeGradient.middle, currentTimeGradient.lower]}
      style={styles.gradient}
    >
      <ScrollView>
        <Text style={styles.greetingsTitle}> Good Morning, Harrison</Text>
        <UserBox></UserBox>
        <SpendingGraph lastSevenDaysSpending={[22, 30, 28, 35, 40, 38, 45]}></SpendingGraph>
        <Transactions yourTransactions={transactions}></Transactions>
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
  navBarDiv: {
    position: 'absolute',      // position relative to parent/screen
    bottom: 0,                 // stick to bottom
    left: 0,
    right: 0,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 0,         // remove the line; shadow handles separation
    borderRadius: 8,           // optional: makes it look slightly elevated
    zIndex: 10,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 }, // negative height for top shadow
    shadowOpacity: 0.1,
    shadowRadius: 7,

    // Android shadow
    elevation: 4,
  },

  userBoxContainer: {
    marginTop: 25,
    backgroundColor: '#ffffff',
    borderRadius: 5,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

    // Android shadow
    elevation: 4,
  },

          // ensure it appears on top
})
