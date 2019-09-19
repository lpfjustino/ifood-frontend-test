import React, { Component } from "react";
import { SPOTIFY_AUTHORIZE } from "../constants/urls";
import { parseHash } from "../utils/index.js";

export default class Login extends Component {

    componentDidMount() {
        const { accessToken } = this.props;
        const hash = parseHash(window.location.hash);
        const token = hash.access_token;

        if (!accessToken && token) {
            this.props.setAccessToken(token);
        }
    }

    getLoginURL() {
        const client_id = "91a84a82e4e34192a860659488ce3ecf"
        // TODO: Make this an env variable
        const redirect_uri = "http://localhost:3000";
        const url = `${SPOTIFY_AUTHORIZE}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`;

        return url;
    }

    render() {
        const { accessToken } = this.props;

        return !accessToken && (
            <div>
                <a href={this.getLoginURL()}>Login</a>
            </div>
        )
    }
}
