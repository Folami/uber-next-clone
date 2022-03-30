import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlkbXVzIiwiYSI6ImNsMWMxejY3ZjAzZzczam8yZTZ3bG8xZjQifQ.2HzjKSN4oF5gchuiM8XJgg';

const Map = (props) => {

    const mapBoxHook = () => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [10.240108, 5.851470],
          zoom: 15,
        });

        if(props.pickupCoordinates){
            // Sam 🚀
            addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){
            // 🔥 Fabio
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    } // 🚀 Maleessha
    useEffect(mapBoxHook, [props.pickupCoordinates, props.dropoffCoordinates]);
    
    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    }

    return (
        <Wrapper id='map'></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 
`