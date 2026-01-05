import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export interface EachContactProps {
  id: string;
  name: string;
  phoneNumber: string;
  onPress: () => void;
}
interface SendToPersonProps {
    name: string
    phoneNumber: string
    backToContactsFunction: () => void
}

interface ContactsComponentProps {
  yourContacts: EachContactProps[];
  toSendFunction: (id: string, name: string, phoneNumber: string) => void;
}

interface ZelleTransferComponent {
  yourContacts: EachContactProps[];

}
const EachContact: React.FC<EachContactProps> = ({ name, phoneNumber, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.eachContactContainer}>
    <Text style={styles.eachContactContainerText}>{name}</Text>
    <Text style={styles.eachContactContainerText}>{phoneNumber}</Text>
  </TouchableOpacity>
);

const ContactsComponent: React.FC<ContactsComponentProps> = ({ yourContacts, toSendFunction }) => (
  <ScrollView style={styles.contactsComponentContainer}>
    {yourContacts.map((person) => (
      <EachContact
        key={person.id}
        id={person.id}
        name={person.name}
        phoneNumber={person.phoneNumber}
        onPress={() => toSendFunction(person.id, person.name, person.phoneNumber)}
      />
    ))}
  </ScrollView>
);

const SendToPersonComponent: React.FC<SendToPersonProps> = ({ name, phoneNumber, backToContactsFunction }) => {
  const [amount, setAmount] = useState('');

  const handlePress = (digit: string) => {
    setAmount(prev => prev + digit);
  };

  const handleDelete = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setAmount('');
  };

  const numPad = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['C','0','⌫'], // C = clear, ⌫ = backspace
  ];

  return (
    
  <View style={styles.sendToPersonContainer}>

    <TouchableOpacity style={styles.backButton} onPress={backToContactsFunction}>
        <Text style={styles.backButtonText}> Back </Text>
    </TouchableOpacity>

    <Text style={styles.headerText}>
      Sending to {name} ({phoneNumber})
    </Text>

    {/* Money-styled amount */}
    <Text style={styles.amountText}>
      ${amount ? (Number(amount) / 100).toFixed(2) : '0.00'}
    </Text>

    <View style={styles.numPadContainer}>
      {numPad.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.numButton}
              onPress={() => {
                if (item === '⌫') handleDelete();
                else if (item === 'C') handleClear();
                else handlePress(item);
              }}
            >
              <Text style={styles.numButtonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  </View>
);

};


const ZelleTransferComponent: React.FC<ZelleTransferComponent> = ({yourContacts}) => {
  const [isContacts, setIsContacts] = useState(true);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [id, setId] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const displayToSend = (id: string, name: string, phoneNumber: string) => {
    setIsContacts(false);
    setName(name);
    setPhoneNumber(phoneNumber);
    setId(id);
  };

  const backToContacts = () => {
    setIsContacts(true);
    setName("");
    setPhoneNumber("");
    setId("");
  }

    const handleSearch = (yourContacts: EachContactProps[]) => {
        if (!currentSearch.trim()) return;

        const search = currentSearch.toLowerCase();

        const foundContact = yourContacts.find(contact =>
            contact.name.toLowerCase().includes(search) ||
            contact.phoneNumber.replace(/\D/g, '').includes(
            search.replace(/\D/g, '')
            )
        );

        if (foundContact) {
            console.log('Found contact:', foundContact);
                setIsContacts(false);
                setName(foundContact.name);
                setPhoneNumber(foundContact.phoneNumber);
                setId(foundContact.id);
            foundContact.onPress();
        } else {
            console.log('No contact found');
        }
    };



  return (
    <View style={styles.container}>
    {isContacts && (
        <TextInput
        value={currentSearch}
        onChangeText={setCurrentSearch}
        placeholder="Enter phone number or Email."
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={(e) => handleSearch(yourContacts)}
    />

    )}

      {isContacts ? (
        <ContactsComponent yourContacts={yourContacts} toSendFunction={displayToSend} />
      ) : (
        <SendToPersonComponent name={name} phoneNumber={phoneNumber} backToContactsFunction={backToContacts} />
      )}
    </View>
  );
};

export default ZelleTransferComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 20,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // Android shadow
    elevation: 4,
  },

  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  eachContactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eachContactContainerText: {
    color: '#003366',
    textTransform: 'uppercase',
  },
  contactsComponentContainer: {
    width: '100%',
  },
  sendToPersonContainer: {
    width: '100%',
    alignItems: 'center',

  }, 
    headerText: {
        fontSize: 18,
        marginBottom: 20,
        color: '#003366',
        fontWeight: '600',
        textAlign: 'center', // centers text
    },
  amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#003366',
  },
  numPadContainer: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  numButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  numButtonText: {
    fontSize: 24,
    color: '#003366',
    fontWeight: '600',
  }, backButton: {
  width: '100%',        
  padding: 10,
  borderRadius: 8,
  justifyContent: 'center',
  backgroundColor: 'white'
},

backButtonText: {
  color: '#003366',
  fontWeight: '600',
  textAlign: 'left',    
},
});
