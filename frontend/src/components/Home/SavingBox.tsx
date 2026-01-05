import { View, Text, StyleSheet } from 'react-native';

interface SavingBoxProps {
  balance: number
  typeOfAccount: string
}
const SavingBox: React.FC<SavingBoxProps> = ({balance, typeOfAccount}) => {
  // This is the savings box it will take bank account box type and then render the ux with the props
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.innerContainerText}> {typeOfAccount} </Text>
            <Text style={styles.innerContainerText}> ${balance}</Text>
        </View>
    </View>
  );
};

export default SavingBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  }, 
  innerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}, 
innerContainerText:{
    color: "#003366",
    fontWeight: 'bold',
    fontSize: 15
}



});
