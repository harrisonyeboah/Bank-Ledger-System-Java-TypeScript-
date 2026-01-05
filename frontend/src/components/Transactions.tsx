import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import OneTransaction from './OneTransaction';

interface OneTransactionProps {
  date: string;
  method: string;
  vendor: string;
  amount: number;
}


interface TransactionsProps{
  yourTransactions: OneTransactionProps[]
}





const Transactions: React.FC<TransactionsProps> = ({ yourTransactions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.transactionsHeader}>Transactions</Text>

      <View>
        {yourTransactions.map((tx, index) => (
          <OneTransaction
            key={index} // For mock/demo data, using index is ok
            date={tx.date}
            method={tx.method}
            vendor={tx.vendor}
            amount={tx.amount}
          />
        ))}
      </View>
    </View>
  );
};
export default Transactions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

    // Android shadow
    elevation: 4,
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
  transactionsHeader: {
    fontSize: 15, 
    color: '#003366',
    fontWeight: 'bold'
  }
});
