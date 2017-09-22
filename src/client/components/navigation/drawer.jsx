import React from 'react';
import MuiDrawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setIsDrawerOpen } from '../../actions';

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
