import React from 'react'
import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    // 🆒 Hyimen
    const { pickup, dropoff } = router.query
    const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0])
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
        // 🔥 Emeric
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiYmlkbXVzIiwiYSI6ImNsMWMxejY3ZjAzZzczam8yZTZ3bG8xZjQifQ.2HzjKSN4oF5gchuiM8XJgg',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            // 🚀 L M
            setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        // 🔥 Emeric
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiYmlkbXVzIiwiYSI6ImNsMWMxejY3ZjAzZzczam8yZTZ3bG8xZjQifQ.2HzjKSN4oF5gchuiM8XJgg',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            // 🚀 L M
            setDropoffCoordinates(data.features[0].center)
        })
    }

    const coordinatesHook = ()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }
    useEffect(coordinatesHook, [pickup, dropoff])

    return (
        <div>
            <Wrapper>
                <ButtonContainer>
                    <Link href="/search">
                        <BackButton
                            src='https://img.icons8.com/ios-filled/50/000000/left.png'
                        />
                    </Link>
                </ButtonContainer>
                <Map 
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                {/* Benjamin */}
                <RideContainer>
                    <RideSelector 
                        pickUpCoordinates={pickUpCoordinates}
                        dropoffCoordinates={dropoffCoordinates}
                    />
                    <ConfirmButtonContainer>
                        <ConfirmButton>
                            Confirm UberX
                        </ConfirmButton>
                    </ConfirmButtonContainer>
                </RideContainer>
            </Wrapper>
        </div>
    )
}

export default Confirm

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain 
`

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

// 🚀 Sam
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`