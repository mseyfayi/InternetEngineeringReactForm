import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {TransitionProps} from '@material-ui/core/transitions';
import MapContainer from "./MapContainer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    }),
);

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const defaultCenter = {lat: 35.8037, lng: 51.3940};

interface PropsType {
    open: boolean;

    onClose(): void;

    save(location:string): void;
}

const FormLocationDialog = ({save, open, onClose}: PropsType) => {
    const classes = useStyles();

    const [lat, setLat] = useState(defaultCenter.lat);
    const [lng, setLng] = useState(defaultCenter.lng);

    const onLocationChanged = (lat: number, lng: number) => {
        setLat(lat);
        setLng(lng);
    };

    const handleSave = () => {
        save(`(${lat}, ${lng})`);
        onClose();
    };

    return (
        <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Location
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleSave}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <MapContainer lat={lat} lng={lng} onClick={onLocationChanged} defaultCenter={defaultCenter}/>
        </Dialog>
    );
};
export default FormLocationDialog
