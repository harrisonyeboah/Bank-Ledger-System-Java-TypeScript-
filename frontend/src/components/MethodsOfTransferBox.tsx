import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Zelle from "../../assets/icons/Zelle.svg";
import Swap from "../../assets/icons/Swap.svg";
import WireTransfer from "../../assets/icons/WireTransfer.svg";

interface MethodsOfTransferBoxProps {
  boxChangeFunction: (method: string) => void;
}



const MethodsOfTransferBox = ({
  boxChangeFunction
}: MethodsOfTransferBoxProps) => {

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>      

      <TouchableOpacity
        style={styles.button}
        onPress={() => boxChangeFunction("zelle")}
      >
          <Zelle width={35} height={35} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => boxChangeFunction("internal")}
      >
        <Swap width={35} height={35} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => boxChangeFunction("wire")}
      >
        <WireTransfer width={35} height={35} />
      </TouchableOpacity>

    </View>
  );
};

export default MethodsOfTransferBox;

const styles = StyleSheet.create({
container: {
  width: '100%',
  padding: 0,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  marginTop: 50,
  flexDirection: 'row',
  justifyContent: 'space-around',

  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 8,

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
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#003366',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotButton: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  forgotButtonText: {
    color: '#003366',
    textAlign: 'center',
  },
});
