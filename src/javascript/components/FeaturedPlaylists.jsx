import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";

export default class FeaturedPlaylists extends Component {

    renderPlaylists() {
        const { playlists } = this.props;

        return playlists.map(playlist => <PlaylistCard playlist={playlist} />);
    }

    fetchPlayLists() {
        const { accessToken, fetchFeaturedPlaylists, filters } = this.props;
        fetchFeaturedPlaylists(accessToken, filters);
    }

    componentDidMount() {
        // this.interval = setInterval(() => this.fetchPlayLists(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        const { accessToken, playlists } = this.props;
        accessToken && playlists.length === 0 && this.fetchPlayLists();

        return (
            <div className="playlists-list">
                { this.renderPlaylists() }
            </div>
        )
    }
}
