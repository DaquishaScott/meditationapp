import axios from 'axios'

const API_BASE_URL = 'https://shazam.p.rapidapi.com'; // Base URL for Shazam API

const fetchMusicData = async (query) => {
  const apiKey = 'c0810b64cabbe69da175p17fjsnfad44d9528d6'; // Replace with your actual API key
  const url = `${API_BASE_URL}/search?term=${encodeURIComponent(query)}`; // Correct API endpoint for search

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'shazam.p.rapidapi.com' // Correct host header
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    console.error('Fetching music data failed:', error);
    throw error; // Re-throw the error to handle it higher up if needed
  }
};


console.log(axios)

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/shazam-events/list',
  params: {
    artistId: '73406786',
    l: 'en-US',
    from: '2022-12-31',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'c0810b64ffmsh9f1cabbe69da175p17b43fjsnfad44d9528d6',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};

try {
	const response = await axios.get('https://shazam.p.rapidapi.com/shazam-events/list', options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export default 
  fetchMusicData
;
