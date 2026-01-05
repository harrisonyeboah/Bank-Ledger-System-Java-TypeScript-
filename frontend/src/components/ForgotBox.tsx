import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FDICBadge from './FDICBadge';
import { ForgotBoxProps } from './LoginBoxProps';

const ForgotBox: React.FC<ForgotBoxProps> = ({ boxChangeFunction, handleForgotFunction }) => {
    const [currentSection, setCurrentSection] = useState("username")
    const [userName, setUserName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ssnAndItin, setSsnAndItin] = useState("");

  return (
    // This is the forgot box this has two states for state which is either username and last 4 digits of ssn or accoutn number and last four digit of ssn. 
    <View style={styles.container}>
        <View style={styles.buttonOverview}>
        <TouchableOpacity onPress={() => setCurrentSection('username')}>
            <Text style={styles.overViewText}>Username</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentSection('account number')}>
            <Text style={styles.overViewText}>Account Number</Text>
        </TouchableOpacity>
        </View>

         <View>
  {currentSection === "username" ? (
    <>
      <TextInput
        style={styles.input}
        placeholder="Username"
        keyboardType="default"
        autoCorrect={false}
        autoCapitalize="none"
        value={userName}
        maxLength={24}
        onChangeText={(text) => setUserName(text.replace(/\s/g, ''))}
      />

      <TextInput
        style={styles.input}
        placeholder="SSN / ITIN"
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={ssnAndItin}
        maxLength={9}
        onChangeText={(text) => {
          const numeric = text.replace(/[^0-9]/g, '');
          setSsnAndItin(numeric);
        }}
      />
    </>
  ) : (
    <>
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={accountNumber}
        maxLength={12}
        onChangeText={(text) => {
          const numeric = text.replace(/[^0-9]/g, '');
          setAccountNumber(numeric);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="SSN / ITIN"
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={ssnAndItin}
        maxLength={9}
        onChangeText={(text) => {
          const numeric = text.replace(/[^0-9]/g, '');
          setSsnAndItin(numeric);
        }}
      />
    </>
  )}
        </View>
        <TouchableOpacity
          onPress={handleForgotFunction}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.submitRequest}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={boxChangeFunction}><Text style={styles.goBackButton}> Go Back to Login </Text> </TouchableOpacity>
        <Text style={styles.extraInformationText}> If information unknown please call +1-800-745-3452</Text> 
        <FDICBadge />
    </View>
  );
};

export default ForgotBox;

const styles = StyleSheet.create({
container: {
  width: '80%',
  backgroundColor: '#ffffff',
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 100,
  alignSelf: 'center',

  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 7,

  // Android shadow
  elevation: 4,
},

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#003366',
    padding: 2.5,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  overViewText: {
    color: "#003366",
    fontSize: 11.5
  },
  
    buttonOverview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 12
    },

    goBackButton: {
        textAlign:"center",
        color: "#003366",
        marginTop: 20
    }, 
    submitRequest: {
        textAlign:"center",
        color: "white", 
        backgroundColor: '#003366',
        borderRadius: 5, 
        padding: 15, 
        fontWeight: '500'
    }, 
    extraInformationText: {
      marginTop: 3,
      textAlign: 'center', 
      color: '#003366',
      fontSize: 8
    }

});
