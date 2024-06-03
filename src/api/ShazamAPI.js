import axios from 'axios'

const RAPIDAPI_KEY = 'c0810b64ffmsh9f1cabbe69da175p17b43fjsnfad44d9528d6';
const RAPIDAPI_HOST = 'spotify23.p.rapidapi.com';
// Function to get new releases
const getNewReleases = async () => {
  try {
    const response = await axios.get('https://spotify23.p.rapidapi.com/album_new_releases/', {
      params: { country: 'US' },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
// Function to search for an artist
const searchArtist = async (artistName) => {
  try {
    const response = await axios.get('https://spotify23.p.rapidapi.com/search/', {
      params: {
        q: artistName,
        type: 'artists',
      },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
// Example usage
console.log(getNewReleases());
console.log(searchArtist('Adele'));
// getNewReleases();
// searchArtist('Adele');

module.exports = {
  getNewReleases,
  searchArtist
}