import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
// import mapboxgl from '!mapbox-gl';
// import Map from './components/map'
import Map from './components/Map.js'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { useRouter } from 'next/dist/client/router'



export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => { 
    return onAuthStateChanged(auth, user=>{
      if (user){
        setUser({
          name:user.displayName,
          photoUrl: user.photoURL,          
        })
      }else{
        setUser(null)
        router.push('./login')
      }
    })
  },[])


  


  return (
    <Wrapper>
      <Map/> 
      <ActionItems >
         {/* Header */}
         <Header>
            <UberLogo src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />

            <Profile>
              {/* <Name>Kashyap Barot 🍭</Name> */}
              <Name> {user && user.name} ✔️ </Name>
              {/* <UserImage src='https://download.logo.wine/logo/Coca-Cola/Coca-Cola-Logo.wine.png' /> */}
              <UserImage src={user && user.photoURL} onClick={() => signOut(auth)} />

            </Profile>
           
         </Header> 

         {/* Action-Btn */}
         <ActionButtons>
           <Link href='/search'>
              <ActionBtn>
                <ActionBtnImage src='https://i.ibb.co/cyvcpfF/uberx.png' />
                Ride
              </ActionBtn>
            </Link> 

          <Link href='/search'> 
              <ActionBtn>
              <ActionBtnImage src='https://i.ibb.co/n776JLm/bike.png' />
                Wheels
              </ActionBtn>
          </Link>
          <Link href='/search'>  
              <ActionBtn>
              <ActionBtnImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
                Reserve
              </ActionBtn>         
          </Link>

 
           {/* <ActionBtn>
           <ActionBtnImage src='https://i.ibb.co/n776JLm/bike.png' />
             Wheels
           </ActionBtn>
           <ActionBtn>
           <ActionBtnImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
             Reserve
           </ActionBtn> */}
         </ActionButtons>

         {/* Input-btn */}
         <Link href='/search'> 
            <InputButton>
                Where to go?
            </InputButton>
         </Link>



      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div` 
flex flex-col h-screen 

` 

// const Map = tw.div`
// bg-red-500 flex-1
// `

const ActionItems = tw.div`
 flex-1 p-4

` 
const Header = tw.div`
flex justify-between items-center
`
const UberLogo =tw.img`
h-28
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-30 text-md
`

const UserImage = tw.img`
h-14 w-14 rounded-full border border-red-400 cursor-pointer p-px transform hover:scale-105
`

const ActionButtons = tw.div`
flex 

`
const ActionBtn = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-xl

`

const ActionBtnImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-300 text-2xl p-4 flex items-center mt-8 rounded-lg transform hover:scale-105
`