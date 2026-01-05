import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function WireTransferForm() {
  // This is the wire transfer form. We are preparing the wire transfer form with react state that takes in the form. 
  // Then we will submit the form.
  const [form, setForm] = useState({
    recipientName: "",
    bankName: "",
    routingNumber: "",
    accountNumber: "",
    amount: "",
    note: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Wire Transfer Submitted:", form);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wire Transfer</Text>

      <TextInput
        style={styles.input}
        placeholder="Recipient Full Name"
        value={form.recipientName}
        onChangeText={(v) => handleChange("recipientName", v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Bank Name"
        value={form.bankName}
        onChangeText={(v) => handleChange("bankName", v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Routing Number"
        keyboardType="numeric"
        value={form.routingNumber}
        onChangeText={(v) => handleChange("routingNumber", v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Account Number"
        keyboardType="numeric"
        value={form.accountNumber}
        onChangeText={(v) => handleChange("accountNumber", v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount ($)"
        keyboardType="decimal-pad"
        value={form.amount}
        onChangeText={(v) => handleChange("amount", v)}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Note (optional)"
        multiline
        value={form.note}
        onChangeText={(v) => handleChange("note", v)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send Wire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderRadius: 5,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

    // Android shadow
    elevation: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: '#003366'
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#ffffffff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#003366",
    fontSize: 16,
    fontWeight: "400",
  },
});
