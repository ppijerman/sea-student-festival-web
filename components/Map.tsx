import {useMemo} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const MapLoading = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  
  `;

// @ts-ignore
const Map = ({lat, lng, zoom, label}) => {
    const mapId = process.env.NEXT_PUBLIC_MAP_ID === undefined ? '' : process.env.NEXT_PUBLIC_MAP_ID;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY === undefined ? '' : process.env.NEXT_PUBLIC_MAP_API_KEY,
        mapIds: [mapId]
    });

    const center = useMemo(() => ({lat: lat, lng: lng}), [])

    if (!isLoaded) {
        return (<div className={'gmaps-container'}>
            <MapLoading>
                Loading Map
            </MapLoading>
        </div>)
    }

    return (
        <GoogleMap zoom={zoom} center={center} mapContainerClassName={'gmaps-container'} id={mapId}>
            <Marker position={center} label={label}/>
        </GoogleMap>
    )
};

export default Map;