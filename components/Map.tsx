import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const MapLoading = styled.div`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  
  `;

// @ts-ignore
const Map = ({lat, lng, zoom, label}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY === undefined ? '' : process.env.NEXT_PUBLIC_MAP_API_KEY,
        mapIds: [process.env.NEXT_PUBLIC_MAP_ID === undefined ? '' : process.env.NEXT_PUBLIC_MAP_ID]
    });

    if (!isLoaded) {
        return (<div className={'gmaps-container'}>
            <MapLoading>
                Loading Map
            </MapLoading>
        </div>)
    }

    return (
        <GoogleMap zoom={zoom} center={{lat: lat, lng: lng}} mapContainerClassName={'gmaps-container'}>
        </GoogleMap>
    )
};

export default Map;