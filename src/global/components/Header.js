import React from "react";
import {AppBar, IconButton, Typography, Toolbar} from "@material-ui/core";
import * as PropTypes from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";

const Header = ({text, isHome}) => {
    const history = useHistory();

    return <AppBar position="static">
        <Toolbar>
            {!isHome && <IconButton edge="start" color="inherit" aria-label="menu" onClick={history.goBack}>
                <ArrowBackIcon/>
            </IconButton>}

            <Typography>
                {text}
            </Typography>
        </Toolbar>
    </AppBar>;
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
    isHome: PropTypes.bool
};

export default Header
