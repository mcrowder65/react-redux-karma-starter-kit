import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {setUsername} from "../actions/index";
import ViewUsername from "./view-username";

const Login = props => {
    return (
        <div>
            <ViewUsername username={props.username}/>
            <button onClick={() => props.setUsername("hello")}>Click me</button>
        </div>
    );
};

Login.propTypes = {
    setUsername: PropTypes.func,
    username: PropTypes.string
};

const mapStateToProps = state => {
    return {
        username: state.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsername: username => {
            return dispatch(setUsername(username));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);