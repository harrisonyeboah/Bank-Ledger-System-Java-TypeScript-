import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import BottomNavBar from '../components/BottomNavbar';
import MethodsOfTransferBox from '../components/Transfers/MethodsOfTransferBox';
import ZelleTransferComponent from '../components/Transfers/ZelleTransferComponent';
import InternalTransferComponent from '../components/Transfers/InternalTransferComponent';
import WireTransferComponent from '../components/Transfers/WireTransferComponent';
import { EachContactProps } from '../components/Transfers/ZelleTransferComponent';

export default function Transfers() {
  const [currentBox, setCurrentBox] = useState<"zelle" | "internal" | "wire">("zelle");

  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const morningGradient = { upper: '#A3CEF1', middle: '#69B3E7', lower: '#1E90FF' };
  const afternoonGradient = { upper: '#87CEFA', middle: '#0090c1ff', lower: '#0e82f7ff' };
  const eveningTimeGradient = { upper: '#32608fff', middle: '#072f57ff', lower: '#003366' }
  const nightTimeGradient = { upper: '#1a1a2e', middle: '#0f3057', lower: '#001f3f' };
  const defaultGradient = { upper: '#32608fff', middle: '#7693acff', lower: '#ffffff' };

  const whiteGradient = { upper: '#f2f2f7', middle: '#f2f2f7', lower: '#f2f2f7' };

  let currentTimeGradient = whiteGradient;


    const contactsOfHarrison: EachContactProps[] = [
    { id: "1", name: "Alex Johnson", phoneNumber: "555-123-4567", onPress: () => {} },
    { id: "2", name: "Maria Gonzalez", phoneNumber: "555-234-7890", onPress: () => {} },
    { id: "3", name: "James Carter", phoneNumber: "555-345-1122", onPress: () => {} },
    { id: "4", name: "Aisha Khan", phoneNumber: "555-456-3344", onPress: () => {} },
    { id: "5", name: "Daniel Kim", phoneNumber: "555-567-8899", onPress: () => {} },
    { id: "6", name: "Olivia Brown", phoneNumber: "555-678-2233", onPress: () => {} },
    { id: "7", name: "Ethan Wilson", phoneNumber: "555-789-4455", onPress: () => {} },
    { id: "8", name: "Sophia Martinez", phoneNumber: "555-890-6677", onPress: () => {} },
    { id: "9", name: "Noah Anderson", phoneNumber: "555-901-8899", onPress: () => {} },
    { id: "10", name: "Priya Patel", phoneNumber: "555-012-3344", onPress: () => {} },
    { id: "11", name: "Michael Thompson", phoneNumber: "555-147-2589", onPress: () => {} },
    { id: "12", name: "Fatima Noor", phoneNumber: "555-258-3691", onPress: () => {} },
  ];

  const methodStateChange = (newState: string) => {
    setCurrentBox(newState);
  }

  return (
    <LinearGradient
      colors={[currentTimeGradient.upper, currentTimeGradient.middle, currentTimeGradient.lower]}
      style={styles.gradient}
    >
      <ScrollView>
        <MethodsOfTransferBox boxChangeFunction={methodStateChange}></MethodsOfTransferBox>
        {currentBox === "zelle" && <ZelleTransferComponent yourContacts={contactsOfHarrison} />}
        {currentBox === "internal" && <InternalTransferComponent />}
        {currentBox === "wire" && <WireTransferComponent />}


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
    color: 'white',
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
    backgroundColor: '#fff',
    borderTopWidth: .5,
    borderTopColor: '#e6e6e6ff',
    elevation: 5,              // shadow on Android
    zIndex: 10,
  }             // ensure it appears on top
})
