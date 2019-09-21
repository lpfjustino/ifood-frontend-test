import React, { Component } from "react";
import PlaylistCard from "./PlaylistCard";

const matchesFilter = (playlist, filter) => {
    const playlistName = playlist.name.toUpperCase()
    const nameFilter = filter.toUpperCase();
    return playlistName.includes(nameFilter);
}

export default class FeaturedPlaylists extends Component {

    renderPlaylists() {
        const { playlists, filters } = this.props;
        const filteredPlaylists = filters.name
            ? playlists.filter(playlist => matchesFilter(playlist, filters.name))
            : playlists

        return filteredPlaylists.map(playlist => <PlaylistCard playlist={playlist} />);
    }

    fetchPlayLists() {
        const { accessToken, fetchFeaturedPlaylists, filters } = this.props;
        fetchFeaturedPlaylists(accessToken, filters);
    }

    componentDidMount() {
        // TODO: perhaps turn 30s a environment variable?
        this.interval = setInterval(() => this.fetchPlayLists(), 30000);
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
