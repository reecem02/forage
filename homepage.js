// HomePage.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleLookingForMushrooms = () => {
    // Navigate to the Foraging Location Map screen
    navigation.navigate('ForagingLocationMap');
  };
  const whatisthemushroom = () => {
    // Navigate to the identify mushroom screen
    navigation.navigate('IdentifyMushrooms');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Forage</Text>
      <Image
        source={require('./bestmushroom.jpg')} // Replace with the actual path to your mushroom image
        style={styles.mushroomImage}
      />
      <Text style={styles.questionText}>Are you...</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={whatisthemushroom}>
          <Text style={styles.buttonText}>Identifying Mushrooms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLookingForMushrooms}>
          <Text style={styles.buttonText}>Looking for Mushrooms</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mushroomImage: {
    width: 120, // Adjust the width as needed
    height: 120, // Adjust the height as needed
  },
  questionText: {
    fontSize: 18,
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#DABC94', // You can change the background color
    padding: 10,
    borderRadius: 5,
    flex: 0.48, // Adjust the width as needed
  },
  buttonText: {
    color: '#00000', // You can change the text color
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomePage;
