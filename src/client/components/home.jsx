import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setInput} from "../actions/index";

const Home = props => {
    return (
        <div>
            {props.input}<br/>
            <input value={props.input}
                   onChange={e => props.setInput(e.target.value)}
            />
        </div>
    );
};

Home.propTypes = {
    input: PropTypes.string,
    setInput: PropTypes.func
};
const mapStateToProps = state => {
    return {
        input: state.input
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setInput: input => dispatch(setInput(input))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
