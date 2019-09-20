import React, { Component } from "react";
import axios from "axios";

export default class FeaturedPlaylists extends Component {

    fetchFeaturedPlaylists() {
        const headers = { Authorization: `Bearer ${this.props.accessToken}` }
        console.log(headers);
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", { headers } );
    }
    
    render() {
        this.props.accessToken && this.fetchFeaturedPlaylists();
        return (
            <div>
                
            </div>
        )
    }
}
