import {
    SET_ACCESS_TOKEN,
    FETCH_FEATURED_PLAYLISTS,
} from "../constants/index.json";
import { SPOTIFY_FEATURED_PLAYLISTS } from "../constants/urls.js";
import axios from "axios";

const actionCreators = {
    setAccessToken(token) {
        return {
            type: SET_ACCESS_TOKEN,
            payload: { token },
        };
    },

    fetchFeaturedPlaylists(accessToken) {
        const headers = { Authorization: `Bearer ${accessToken}` }
        return {
            type: FETCH_FEATURED_PLAYLISTS,
            payload: { 
                promise: axios.get(SPOTIFY_FEATURED_PLAYLISTS, { headers } ),
            },
        };
    }
}

export default actionCreators;