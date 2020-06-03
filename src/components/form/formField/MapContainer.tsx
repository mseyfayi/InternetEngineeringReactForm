import React from "react";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {width: '100vw', height: '100vh'};

interface PropsType {
    lat: number;
    lng: number;

    onClick(lat: number, lng: number): void;

    defaultCenter: { lat: number; lng: number; }
}

const MapContainer = ({lat, lng, onClick, defaultCenter}: PropsType) => {
    const handleClick = ({latLng}: any) => onClick(latLng.lat(), latLng.lng());

    return (
        <LoadScript googleMapsApiKey="AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                onClick={handleClick}
                zoom={12}
            >
                <Marker position={{lat, lng}}/>
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer
