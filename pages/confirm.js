import { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map.js'
import { useRouter } from 'next/dist/client/router'
import RideSelector from './components/RideSelector.js'
import Link from 'next/link'



const Confirm = () => {

    const router = useRouter()
    const { pickup , dropoff } = router.query
    

    const [ pickupCoordinates , setPickupCoordinates ] = useState([0,0])
    const [ dropoffCoordinates , setDropoffCoordinates ] = useState([0,0])
    
    const getPickupCoordinates = (pickup) =>{
        // const pickup = "Santa Monica";

        fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoia2FzaHlhcHBwMDAzIiwiYSI6ImNrdnJvZWwxejB0ODkycHFwcHRpdG5nbGYifQ.pSVW0ed0w7v0_neYd9KkUA',
                limit: 1
            })
        )
        .then(response => response.json() )
        .then(data => {
            
            setPickupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) =>{
        // const dropoff = "Los Angeles";

        fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoia2FzaHlhcHBwMDAzIiwiYSI6ImNrdnJvZWwxejB0ODkycHFwcHRpdG5nbGYifQ.pSVW0ed0w7v0_neYd9KkUA',
                limit: 1
            })
        )
        .then(response => response.json() )
        .then(data => {
            
            setDropoffCoordinates(data.features[0].center);
        })

    }



    useEffect ( () => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);

    }, [ pickup , dropoff ] )

    


    
    return (
        <Wrapper>

            {/* Back-Button  */}
            <BtnContainer>
                <Link href='/search'>
                    <Backbotton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </BtnContainer>




           <Map
                pickupCoordinates={ pickupCoordinates }
                dropoffCoordinates={ dropoffCoordinates }
           />

           <RideContainer>
               {/* Ride Select Option */}
               <RideSelector
                pickupCoordinates={ pickupCoordinates }
                dropoffCoordinates={ dropoffCoordinates }
               />
               
               {/* Confirm btn */}
               <ConfirmBtnContainer>
                   <ConfirmBtn>
                        Confirm UBER
                   </ConfirmBtn>
               </ConfirmBtnContainer>

           </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const BtnContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const Backbotton = tw.img`
h-full object-contain
`

const Wrapper = tw.div`
h-screen flex flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmBtn = tw.div`bg-black text-white my-4 mx-4 py-2 text-center text-xl `

const ConfirmBtnContainer = tw.div`
border-t-2
`