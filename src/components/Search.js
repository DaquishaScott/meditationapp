import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    // Simulate an API call or search function
    try {
      const response = await axios.get(`YOUR_API_ENDPOINT/search`, {
        params: { q: query }
      });
      setResults(response.data.results); // Adjust based on your API response structure
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for meditations..."
          required
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.name}</li> // Adjust based on your result structure
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Search;


