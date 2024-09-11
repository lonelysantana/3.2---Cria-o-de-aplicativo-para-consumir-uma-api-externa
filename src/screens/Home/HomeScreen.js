// src/screens/Home/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import CharacterCard from '../../components/CharacterCard';

const HomeScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters?limit=1000');
        const data = await response.json();
        setCharacters(data.items || []);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar Personagem"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard character={item} />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum personagem encontrado.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingHorizontal: 10,
  },
  searchInput: {
    margin: 10,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  emptyText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;