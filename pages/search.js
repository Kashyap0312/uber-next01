import { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'


const Search = () => {

    const [pickup , setPickup ] = useState("");
    const [dropoff , setDropoff ] = useState("");


    
    return (
        <Wrapper>
            {/* Back-Button  */}
            <ButtonContainer>
                <Link href='/'>
                    <Backbtn src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>


            {/* Input Box */}
            <InputContainer>
              <FromToIcons>
                  <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
                  <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                  <Square src='https://i.ibb.co/2vtQGmm/icons8-square-full-32.png' />
              </FromToIcons>

              <InputBoxes>
                 <Input 
                    placeholder='Enter pick up location'
                    value={pickup} 
                    onChange={ (e) => setPickup(e.target.value)}
                />
                 <Input 
                    placeholder='Where to ?'
                    value={dropoff}
                    onChange={ (e) => setDropoff(e.target.value)} 
                />
              </InputBoxes>

              <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
            </InputContainer>


            {/* Saved Places */}
            <SavedPlaces>
                <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
                Saved Places
            </SavedPlaces>

            {/* Confirm Location */}
            <Link href={{
                pathname: "/confirm",
                query: {
                    pickup: pickup,
                    dropoff: dropoff
                }
            }}>
                <ConfirmLoc>
                    Confirm Location
                </ConfirmLoc>
            </Link>    
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-4
`

const Backbtn= tw.img`
h-12 cursor-pointer
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const FromToIcons = tw.div`
flex w-10 flex-col mr-2 items-center
`

const Circle = tw.img`h-2.5 `

const Line = tw.img`h-10 `

const Square = tw.img`h-3 `

const InputBoxes = tw.div` 
flex flex-col flex-1
`

const Input = tw.input` 
h-10 bg-gray-200 my-2 rounded-2 p-2 border-none 
`

const PlusIcon = tw.img` 
w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces =tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`bg-gray-400 h-10 w-10 p-2 rounded-full mr-2`

const ConfirmLoc =tw.div`
bg-black text-white text-center mt-2 mx-4 px-3 py-2 text-2xl cursor-pointer
`

