import React, { Component } from "react";


export default class FeaturedPlaylists extends Component {

    renderPlaylists() {
        const { playlists } = this.props;

        return playlists.map(playlist => <div><img src={playlist.images[0].url} /></div>)
    }

    render() {
        const { accessToken, fetchFeaturedPlaylists, playlists } = this.props;
        accessToken && playlists.length === 0 && fetchFeaturedPlaylists(accessToken);

        return (
            <div>
                { this.renderPlaylists() }
            </div>
        )
    }
}
