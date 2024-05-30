import{
FETCH_MUSIC_BEGIN,
FETCH_MUSIC_SUCCESS,
FETCH_MUSIC_FAILURE,
CREATE_PLAYLIST,
ADD_TO_PLAYLIST,
} from './actions';
// Initial state
const initialState = {
items: [],
loading: false,
error: null,
playlists: [],
};
// Reducers
export const musicReducer = (state = initialState, action) => {
switch (action.type) {
case FETCH_MUSIC_BEGIN:
return {
...state,
loading: true,
error: null,
};
case FETCH_MUSIC_SUCCESS:
return {
...state,
loading: false,
items: action.payload.music,
};
case FETCH_MUSIC_FAILURE:
return {
...state,
loading: false,
error: action.payload.error,
items: [],
};
case CREATE_PLAYLIST:
return {
...state,
playlists: [...state.playlists, { name: action.payload.name, tracks: [] }],
};
case ADD_TO_PLAYLIST:
return {
...state,
playlists: state.playlists.map((playlist) =>
playlist.name === action.payload.playlistName
? { ...playlist, tracks: [...playlist.tracks, action.payload.track] }
: playlist
),
};
default:
return state;
}
};
const reducers = {
music: musicReducer,
};
export default reducers;