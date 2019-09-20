import { connect } from "react-redux";
import FeaturedPlaylists from "../components/FeaturedPlaylists";

function mapStateToProps(state) {
    return {
        accessToken: state.spotify.accessToken,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPlaylists);