import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import tw from "tailwind-styled-components"
import Map from "./components/Map";
import Link from 'next/link'
import { auth, provider } from '../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
    const router = useRouter()
    const [user, setUser] = useState(null);

    const authenticationHook = () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    photoUrl: user.photoURL
                })
                console.log(user)
            } else {
                  setUser(null)
                  router.push("/login")
              }
        });
        return ()=> unsubscribe()
    }
    useEffect(authenticationHook, [])

    return (
        <Wrapper>
            <Map id='map' />
            <ActionItems>
                {/*Header*/}
                <Header>
                    <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />
                    <Profile>
                        <Name>{user && user.name}</Name>
                        <UserImage src={user && user.photoUrl} onClick={()=>signOut(auth)}  >
                        </UserImage>
                    </Profile>
                </Header>
                {/*Action Buttons*/}
                <ActionButtons>
                    <Link href="/search">
                        <ActionButton>
                            <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
                                Ride
                        </ActionButton>
                    </Link>
                    <ActionButton>
                        <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
                            Wheels
                    </ActionButton>
                    <ActionButton>
                        <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
                            Reserve
                    </ActionButton>
                </ActionButtons>

                {/*DestinationInputButton*/}
                <InputButton>Where to?</InputButton>
            </ActionItems>
        </Wrapper>
    );
}


const Wrapper = tw.div`
  flex flex-col h-screen 
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
flex flex-row justify-between items-center
`

const UberLogo = tw.img`
h-28 
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex bg-gray-400 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-400 text-2xl p-4 flex items-center mt-8
`
