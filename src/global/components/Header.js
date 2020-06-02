import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import * as PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
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
