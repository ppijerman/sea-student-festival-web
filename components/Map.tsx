import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Children, cloneElement, isValidElement, useEffect, useRef, useState} from "react";

// @ts-ignore
const GMap = ({lat, lng, zoom, children}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: {
                    lat: lat,
                    lng: lng
                },
                clickableIcons: true,
                disableDefaultUI: true,
                mapId: process.env.MAP_ID,
                zoomControl: true,
                zoom: zoom
            }))
        }
    }, [ref, map])

    return (
        <>
            <div ref={ref}></div>
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    // @ts-ignore
                    return cloneElement(child, {map: map})
                }
            })}
        </>
    )
}

// @ts-ignore
const GMapMarker = ({lat, lng, label, map}) => {
    const [marker, setMarker] = useState<google.maps.Marker>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker())
        }

        return () => {
            if (marker) {
                marker.setMap(null)
            }
        }
    }, [marker])

    useEffect(() => {
        if (marker) {
            marker.setOptions({
                clickable: true,
                crossOnDrag: false,
                draggable: false,
                label: label,
                map: map,
                position: {
                    lat: lat,
                    lng: lng
                },
                visible: true,
            })
        }
    })

    return null;
}

// @ts-ignore
const Map = ({lat, lng, zoom, label}) => {
    const mapApi : string = process.env.MAP_API_KEY === undefined ? '' : process.env.MAP_API_KEY;

    return (
        <Wrapper apiKey={mapApi}>
            <GMap lat={lat} lng={lng} zoom={zoom}>
                <GMapMarker lat={lat} lng={lng} label={label} map={null}/>
            </GMap>
        </Wrapper>
    )
};

export default Map;