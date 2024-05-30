import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusic } from '../redux/actions';
const Search = () => {
const [query, setQuery] = useState('');
const dispatch = useDispatch();
const { items, loading, error } = useSelector((state) => state.music);
const handleSearch = () => {
dispatch(fetchMusic(query));
};
return (
<div>
<input
type="text"
placeholder="Search for meditation music..."
value={query}
onChange={(e) => setQuery(e.target.value)}
onKeyPress={(event) => {
if (event.key === 'Enter') {
handleSearch();
}
}}
/>
<button onClick={handleSearch}>Search</button>
{loading && <p>Loading...</p>}
{error && <p>Error: {error}</p>}
{items && items.map((item, index) => (
<div key={index}>
<h3>{item.trackName}</h3>
<p>{item.artistName}</p>
<button>Play</button>
</div>
))}
</div>
);
};
export default Search;