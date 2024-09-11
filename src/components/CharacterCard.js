// src/components/CharacterCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({ character }) => {
  const navigation = useNavigation();
  const imageUrl = character?.image || 'https://via.placeholder.com/100';

  const handlePress = () => {
    navigation.navigate('CharacterDetailScreen', { character });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.name}>{character?.name || 'Nome não disponível'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
    alignItems: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
   
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202020',
    textAlign: 'center',
  },
});

export default CharacterCard;