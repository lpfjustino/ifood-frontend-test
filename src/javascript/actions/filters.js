import { GET_TRENDING_PLAYLISTS_FILTERS } from "../constants/index.json";
import { TRENDING_PLAYLIST_FILTERS } from "../constants/urls";
import axios from "axios";

const actionCreators = {
    getFilters() {
        return {
            type: GET_TRENDING_PLAYLISTS_FILTERS,
            payload: {
                promise: axios.get(TRENDING_PLAYLIST_FILTERS)
            }
        };
    },
}

export default actionCreators;