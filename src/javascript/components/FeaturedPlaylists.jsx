import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";

export default class FeaturedPlaylists extends Component {

    renderPlaylists() {
        const { playlists } = this.props;
        console.log(playlists)

        return playlists.map(playlist => <PlaylistCard playlist={playlist} />);
    }

    render() {
        const { accessToken, fetchFeaturedPlaylists, playlists } = this.props;
        accessToken && playlists.length === 0 && fetchFeaturedPlaylists(accessToken);

        return (
            <div className="playlists-list">
                { this.renderPlaylists() }
            </div>
        )
    }
}
