import { connect } from "react-redux";
import authActions from "../actions/auth";
import Login from "../components/Login";

function mapStateToProps(state) {
    return {
        accessToken: state.auth.accessToken,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setAccessToken: token => dispatch(authActions.setAccessToken(token)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);