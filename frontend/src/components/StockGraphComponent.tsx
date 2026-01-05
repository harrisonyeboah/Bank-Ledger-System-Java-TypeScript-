import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-gifted-charts';



interface LineChartDataPoint {
  value: number;
}

interface StockGraphComponentProps {
    ticker: string
    price: number
    data: LineChartDataPoint[]
}


const StockGraphComponent: React.FC<StockGraphComponentProps> = ({ticker, price, data}) => {
    /* This is the stock graph component that takes in the ticker, data this the componen for graphing the component for appl right now*/
    const navigation = useNavigation<any>();
    const screenWidth = Dimensions.get('window').width;


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
