import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';




const FDICBadge: React.FC = () => {
  // This is the FDIC insurance badge for the login page
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/FDIC.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}> This bank is FDIC insured</Text>
    </View>
  );
};

export default FDICBadge;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: '#003366',
    fontWeight: '500',
  },
});
