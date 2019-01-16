import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import SessionManager from "../services/Storage";
import { withRouter } from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends Component {

    state = {
        isLogged: SessionManager.isLogged(),
    };

    handleLogout = () => { 
        SessionManager.clear();
        this.props.history.push("/login");
    }

    render() {
        const { classes} = this.props;
        const { isLogged } = this.state;


        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Dashboard
                        </Typography>
                        {isLogged && (
                            <div>
                                <Button onClick={this.handleLogout} color="inherit">
                                    Salir
                                </Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
export default withStyles(styles)(withRouter(MenuAppBar));
