import React from "react";
import PropTypes from "prop-types";

const ViewUsername = props => (
    <div>
        {props.username}
    </div>
);
ViewUsername.propTypes = {
    username: PropTypes.string.isRequired
};

export default ViewUsername;
