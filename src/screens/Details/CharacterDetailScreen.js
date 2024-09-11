// src/screens/Details/CharacterDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const CharacterDetailScreen = ({ route, navigation }) => {
  const { character } = route.params;
  const imageUrl = character?.image || 'https://via.placeholder.com/150';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#FFC300" />
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{character?.name || 'Nome não disponível'}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Raça: {character?.race || 'Desconhecido'}</Text>
        <Text style={styles.detailText}>KI: {character?.ki || 'Desconhecido'}</Text>
        <Text style={styles.detailText}>MaxKI: {character?.maxKi || 'Desconhecido'}</Text>
        <Text style={styles.detailText}>Gênero: {character?.gender || 'Desconhecido'}</Text>
        <Text style={styles.detailText}>Afiliação: {character?.affiliation || 'Desconhecido'}</Text>
        <Text style={styles.description}>
          Descrição: {character?.description || 'Descrição não disponível.'}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',

  },
  title: {
    fontSize: 22,
    color: '#FFC300',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#DDDDDD',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#BBBBBB',
    marginTop: 10,
    lineHeight: 22,
  },
});

export default CharacterDetailScreen;