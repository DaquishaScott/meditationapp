import ShazamAPI from '../api/ShazamAPI';
// Action types
export const FETCH_MUSIC_BEGIN = 'FETCH_MUSIC_BEGIN';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_FAILURE = 'FETCH_MUSIC_FAILURE';
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST';
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
// Action creators
export const fetchMusicBegin = () => ({
type: FETCH_MUSIC_BEGIN,
});
export const fetchMusicSuccess = (music) => ({
type: FETCH_MUSIC_SUCCESS,
payload: { music },
});
export const fetchMusicFailure = (error) => ({
type: FETCH_MUSIC_FAILURE,
payload: { error },
});
export const createPlaylist = (name) => ({
type: CREATE_PLAYLIST,
payload: { name },
});
export const addToPlaylist = (playlistName, track) => ({
type: ADD_TO_PLAYLIST,
payload: { playlistName, track },
});
export const fetchMusic = (query) => {
return (dispatch) => {
dispatch(fetchMusicBegin());
ShazamAPI.fetchMusicData(query)
.then((json) => {
dispatch(fetchMusicSuccess(json.tracks));
return json.tracks;
})
.catch((error) => dispatch(fetchMusicFailure(error)));
};
};
