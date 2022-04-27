import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = (props) => {
    const [rideDuration, setRideDuration ]= useState(0);

    const getDirections = (pickUpCoordinates, dropoffCoordinates) => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiYmlkbXVzIiwiYSI6ImNsMWMxejY3ZjAzZzczam8yZTZ3bG8xZjQifQ.2HzjKSN4oF5gchuiM8XJgg',
            })
        )
        .then((response)=>{
            return response.json();
        }).then(data => {
            console.log(data);
            console.log(data.routes[0]);
            setRideDuration(data.routes[0].duration/100)
        })
    }

    useEffect(()=>{
        if(props.pickUpCoordinates && props.dropoffCoordinates) {
            getDirections(props.pickUpCoordinates, props.dropoffCoordinates)
        }
    }, [props.pickUpCoordinates, props.dropoffCoordinates])
    
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            {/* 🔥 FAbio *//* 🚀 Sam */}
            <CarList>
                
                { carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>${(rideDuration/100*car.multiplier).toFixed(2)}</Price>
                    </Car>
                )) }

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`
// 🚀 Devlin
const Car = tw.div`
flex p-4 items-center
`

// 🔥 Heimen
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

// Emeric 🔥
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`