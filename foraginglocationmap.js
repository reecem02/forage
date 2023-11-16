// ForagingLocationMap.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ForagingLocationMap = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationName, setLocationName] = useState('');

  const handleSaveLocation = () => {
    // Validate that latitude and longitude are not empty
    if (!latitude || !longitude) {
      Alert.alert('Error', 'Please enter valid latitude and longitude.');
      return;
    }

    // Check if locationName is empty, if yes, prompt user
    if (!locationName) {
      Alert.prompt('Location Name', 'What would you like to name this location?', (name) => {
        if (name) {
          // User entered a name, handle the save logic here
          saveLocation(name);
        } else {
          // User canceled the prompt
          Alert.alert('Error', 'Location name cannot be empty.');
        }
      });
    } else {
      // User has already entered a locationName, handle the save logic here
      saveLocation(locationName);
    }
  };

  const saveLocation = (name) => {
    // Handle saving location logic here
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
    console.log('Location Name:', name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Coordinates</Text>
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        value={latitude}
        onChangeText={(text) => setLatitude(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Longitude"
        value={longitude}
        onChangeText={(text) => setLongitude(text)}
        keyboardType="numeric"
      />
      <Button title="Save Location" onPress={handleSaveLocation} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
});

export default ForagingLocationMap;
