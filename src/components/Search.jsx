import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';

import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { Paper, Box } from "@material-ui/core";
import { connect } from "react-redux"
import { searchHero } from "../actions/fetchHeros"
import {setLoading} from "../actions/heroAction";



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  timer;

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handlerEventImput = (event) => {

    const value = event.target.value;

    this.handlerTimer(value)
  }
  handlerTimer = (value) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    const { search_text, set_loading } = this.props;
    set_loading(true)
    this.timer = setTimeout(() => {
      search_text(value);
    }, 750);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <Paper elevation={0}>
          <AppBar position="static" className="App-bars">
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={this.handlerEventImput}
                  placeholder="Search Hero…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>

            </Toolbar>
          </AppBar>


        </Paper>

      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MapDispatchToProps = (dispatch) => {

  return {
    // anteriormente
    // setHeroes: (heroes) => dispatch(setHeroes(heroes)),
    // setLoading: (loading)=>dispatch(setLoading(loading))
    // ahora
    search_text: (text) => dispatch(searchHero(text)),
    set_loading: (arg) => dispatch(setLoading(arg))
  }
}

const searchC = withStyles(styles)(PrimarySearchAppBar);


export default connect(null, MapDispatchToProps)(searchC)
