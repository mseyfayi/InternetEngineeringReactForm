import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from 'react-router-dom';

interface Props {
    text: string;
    isHome?: boolean;
}

const Header = ({text, isHome}: Props) => {
    const history = useHistory();

    return <AppBar position="sticky">
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

export default Header
