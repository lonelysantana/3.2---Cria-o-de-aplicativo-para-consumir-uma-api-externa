// CustomNavbar.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomNavbar = () => {
  return (
    <View style={styles.navbar}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/6/61/Dragon_Ball_Z_Logo.png' }} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Dragon Ball</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFC300',
    fontWeight: 'bold',
    fontFamily: 'sans-serif', // Tente importar uma fonte específica para o tema
  },
});

export default CustomNavbar;
