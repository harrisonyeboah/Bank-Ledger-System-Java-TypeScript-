import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface LastSevenTransactionsProps {
  lastSevenDaysSpending: number[]
}

const SpendingGraph: React.FC<LastSevenTransactionsProps> = ({ lastSevenDaysSpending }) => {
  /* This component is graphing and aggregating the last 7 days of spendnig. This takes in a prop from our java api then will plot the data for the last seven days.  */
  // Generate last 7 days labels
  const last7DaysLabels = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const month = d.getMonth() + 1; // getMonth() is 0-based
    const day = d.getDate();
    return `${month}/${day}`;
  });



  // Convert to cumulative data
  const cumulativeData = lastSevenDaysSpending.reduce<number[]>((acc, value, index) => {
    acc.push((acc[index - 1] ?? 0) + value);
    return acc;
  }, []);

  const lineData = {
    labels: last7DaysLabels,
    datasets: [
      { data: cumulativeData, strokeWidth: 2 },
    ],
  };

  const chartWidth = cumulativeData.length * 40; // 40px per day

  const chartConfig = {
    backgroundColor: '#ffffffff',
    backgroundGradientFrom: '#ffffffff',
    backgroundGradientTo: '#ffffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
    propsForDots: { r: '0', strokeWidth: '0', stroke: '#fff' }, 
    strokeWidth: 1
  };

  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Total Spending Last 7 Days</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
          data={lineData}
          width={last7DaysLabels.length * 60}
          height={160}
          chartConfig={chartConfig}
          bezier
          withHorizontalLines={false}
          withVerticalLines={false}
          withInnerLines={false}
          style={styles.chart}
        />
      </ScrollView>
    </View>
  );
};

export default SpendingGraph

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
    // iOS shadow (matched style)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Android shadow
    elevation: 4,
  },

  innerText: {
    color: '#003366',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  chart: {
    borderRadius: 16,
  },
});
