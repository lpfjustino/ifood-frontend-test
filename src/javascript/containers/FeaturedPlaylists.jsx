import { connect } from "react-redux";
import FeaturedPlaylists from "../components/FeaturedPlaylists";
import spotifyActions from "../actions/spotify";

function mapStateToProps(state) {
    return {
        accessToken: state.spotify.accessToken,
        playlists: state.spotify.playlists,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFeaturedPlaylists: accessToken => dispatch(spotifyActions.fetchFeaturedPlaylists(accessToken)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);