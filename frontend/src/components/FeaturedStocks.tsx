import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* =======================
   Interfaces
======================= */

// Single stock shape
export interface FeaturedStock {
  ticker: string;
  price: number;
  percentSinceLastInvested: number;
}

// Props for parent component
interface FeaturedStocksProps {
  allFeaturedStocks: FeaturedStock[];
}

// Props for child component
interface EachFeaturedStockProps extends FeaturedStock {}

/* =======================
   Child Component
======================= */

const EachFeaturedStock: React.FC<EachFeaturedStockProps> = ({ ticker, price, percentSinceLastInvested }) => {
  const isPositive = percentSinceLastInvested >= 0;

  return (
    <View style={styles.eachFeaturedStockContainer}>
      <View>
        <Text style={styles.eachTickerText}>{ticker}</Text>
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.eachTickerPrice}>${price.toFixed(2)}</Text>
        <Text
          style={[
            styles.eachTickerPercentSinceLastInvested,
            { color: isPositive ? 'green' : 'red' },
          ]}
        >
          {isPositive ? '+' : ''}
          {percentSinceLastInvested.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

/* =======================
   Parent Component
======================= */

const FeaturedStocks: React.FC<FeaturedStocksProps> = ({ allFeaturedStocks }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Featured</Text>

      {allFeaturedStocks.map(stock => (
        <EachFeaturedStock
          key={stock.ticker}
          ticker={stock.ticker}
          price={stock.price}
          percentSinceLastInvested={stock.percentSinceLastInvested}
        />
      ))}
    </View>
  );
};

export default FeaturedStocks;

/* =======================
   Styles
======================= */

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  headerText: {
    color: '#003366',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },

  eachFeaturedStockContainer: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

    // Android shadow
    elevation: 4,
  },

  eachTickerText: {
    color: '#003366',
    fontSize: 28,
    fontWeight: '400',
  },

  eachTickerPrice: {
    color: '#003366',
    fontSize: 22,
    fontWeight: '400',
  },

  eachTickerPercentSinceLastInvested: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
});
