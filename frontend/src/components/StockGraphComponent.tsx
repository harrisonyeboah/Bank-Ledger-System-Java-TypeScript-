import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import UbuntuText from './UbuntuText';
import { MaterialIcons } from '@expo/vector-icons';
import HomeIcon from "../../assets/icons/Home.svg";
import TransferMoney from "../../assets/icons/TransferMoney.svg";
import Invest from "../../assets/icons/Invest.svg"; 
import OurServices from "../../assets/icons/OurServices.svg"; 
import { useNavigation } from '@react-navigation/native';
import { LineChart, BarChart, PieChart,  } from 'react-native-gifted-charts';




interface StockGraphComponentProps {
    ticker: string
    price: number
    priceStamps: number[];
}


const StockGraphComponent: React.FC<StockGraphComponentProps> = ({ticker, price, priceStamps}) => {
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;
 const data = [
    { value: 50 },
    { value: 80 },
    { value: 40 },
    { value: 95 },
    { value: 75 },
    { value: 60 },
    { value: 100 },
    { value: 85 },
    { value: 90 },
    { value: 70 },
    { value: 95 },
    { value: 110 },
    { value: 120 },
    { value: 105 },
    { value: 130 },
    { value: 125 },
    { value: 140 },
    { value: 135 },
    { value: 150 },
    { value: 145 },
    { value: 160 },
    { value: 155 },
    { value: 170 },
    { value: 165 },
    { value: 180 },
    { value: 175 },
    { value: 190 },
    { value: 185 },
    { value: 200 },
    { value: 195 },
  ]; // few points

  const containerPadding = 16;
  const chartWidth = screenWidth - containerPadding * 2;

  // Dynamically calculate spacing so points stretch fully
  const spacing = chartWidth / (data.length - 1);

  return (
  <View style={styles.container}>
        <Text style={styles.tickerText}>  {ticker} </Text>
        <Text style={styles.tickerPrice}> ${price} </Text>

    <View style={styles.lineGraph}>

        <LineChart
        data={data}
        width={chartWidth}
        height={300}
        spacing={40}
        color="#003366"
        curved
        thickness={0.5}
        initialSpacing={0}
        hideDataPoints

        /* Remove grid + labels */
        hideRules
        hideYAxisText
        hideOrigin

        /* Remove axis lines */
        xAxisThickness={0}
        yAxisThickness={0}
        xAxisColor="transparent"
        yAxisColor="transparent"
        />

    </View>

    </View>
  );
};

export default StockGraphComponent;

const styles = StyleSheet.create({
  container: {         
  marginTop: 20,         


  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 7,

  elevation: 4,
},
    tickerText: {
        color: '#003366',
        fontSize: 20, 
        fontWeight: '300'
    },
tickerPrice: {
    color: '#003366',
    fontSize: 25
}, 
lineGraph: {
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
}
});
