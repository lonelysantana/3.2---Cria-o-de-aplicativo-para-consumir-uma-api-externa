export const fetchCharacters = async () => {
  try {
    const response = await fetch('https://dragonball-api.com/api/characters');
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    throw error; 
  }
};
