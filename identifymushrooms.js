// IdentifyMushrooms.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IdentifyMushrooms = ({ navigation }) => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [texture, setTexture] = useState('');
  const [capShape, setCapShape] = useState('');
  const [mushroomName, setMushroomName] = useState('');
  const [savedMushroomInfo, setSavedMushroomInfo] = useState(null);

  const handleSave = () => {
    // Save the information
    const mushroomInfo = {
      size,
      color,
      texture,
      capShape,
      name: mushroomName,
    };

    setSavedMushroomInfo(mushroomInfo);

    // Clear input fields
    setSize('');
    setColor('');
    setTexture('');
    setCapShape('');
    setMushroomName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Identify Mushrooms</Text>
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={size}
        onChangeText={setSize}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Texture"
        value={texture}
        onChangeText={setTexture}
      />
      <TextInput
        style={styles.input}
        placeholder="Cap Shape (Ex. Round, Wavy, Pointy)"
        value={capShape}
        onChangeText={setCapShape}
      />
      <TextInput
        style={styles.input}
        placeholder="What do you want to call this mushroom? :)"
        value={mushroomName}
        onChangeText={setMushroomName}
      />
      <Button title="Save" onPress={handleSave} />

      {savedMushroomInfo && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{savedMushroomInfo.name}:</Text>
          <Text>{`Size: ${savedMushroomInfo.size}`}</Text>
          <Text>{`Color: ${savedMushroomInfo.color}`}</Text>
          <Text>{`Texture: ${savedMushroomInfo.texture}`}</Text>
          <Text>{`Cap Shape: ${savedMushroomInfo.capShape}`}</Text>
        </View>
      )}
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
    marginBottom: 12,
    padding: 8,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  infoBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: '100%',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default IdentifyMushrooms;
