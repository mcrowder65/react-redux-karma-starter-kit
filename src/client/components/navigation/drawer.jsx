import React from "react";
import MuiDrawer from "material-ui/Drawer";
import List from "material-ui/List";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {setIsDrawerOpen} from "../../actions";

const Drawer = props => (
    <div>

        <MuiDrawer
            open={props.isDrawerOpen}
            onRequestClose={() => props.setIsDrawerOpen(false)}
        >
            <List>
            </List>
        </MuiDrawer>
    </div>
);

Drawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    setIsDrawerOpen: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    isDrawerOpen: state.isDrawerOpen
});

const mapDispatchToProps = dispatch => ({
    setIsDrawerOpen: isDrawerOpen => dispatch(setIsDrawerOpen(isDrawerOpen))
});
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
