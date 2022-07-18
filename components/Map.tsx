import { useMemo, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";
import LatLngLiteral = google.maps.LatLngLiteral;
import MapOptions = google.maps.MapOptions;

const MapLoading = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  justify-content: center;
  color: var(--sand);
  `;

// @ts-ignore
const Map = ({lat, lng, zoom, label}) => {
    const mapId = process.env.NEXT_PUBLIC_MAP_ID === undefined ? '' : process.env.NEXT_PUBLIC_MAP_ID;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY === undefined ? '' : process.env.NEXT_PUBLIC_MAP_API_KEY,
    });

    const center = useMemo<LatLngLiteral>(() => ({lat: lat, lng: lng}), [])
    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapId: mapId
    }), [])

    if (!isLoaded) {
        return (<div className={'gmaps-container'}>
            <MapLoading>
                Loading Map
            </MapLoading>
        </div>)
    }

    return (
        <GoogleMap zoom={zoom}
                   center={center}
                   mapContainerClassName={'gmaps-container'}
                   options={options}>
            <Marker position={{lat: lat, lng: lng}} icon={'/marker.png'}/>
        </GoogleMap>
    )
};

export default Map;