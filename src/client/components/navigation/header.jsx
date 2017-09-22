import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { connect } from 'react-redux';

import { setIsDrawerOpen } from '../../actions';

const Header = props => (
  <div>
    <AppBar>
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu" onClick={() => props.setIsDrawerOpen(true)} >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
            Buffalo
        </Typography>
      </Toolbar>
    </AppBar>
    <div className="body">
      {props.children}
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  setIsDrawerOpen: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setIsDrawerOpen: isDrawerOpen => dispatch(setIsDrawerOpen(isDrawerOpen))
});
export default connect(() => ({}), mapDispatchToProps)(Header);
