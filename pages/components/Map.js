import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlkbXVzIiwiYSI6ImNsMWMxejY3ZjAzZzczam8yZTZ3bG8xZjQifQ.2HzjKSN4oF5gchuiM8XJgg';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [6.566282, 3.361227],
          zoom: 20,
        });
      });

  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1 
`