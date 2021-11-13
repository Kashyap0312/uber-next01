import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/dist/client/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import {auth,provider} from '../firebase'
// import { onAuthStateChanged } from '@firebase/auth'

const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                router.push('/')
            }
        })

    },[])



    return (
        <Wrapper>
            <UberLogo src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />
            <Title>Log in to access your account </Title>
            <HeadImg src='https://i.ibb.co/CsV9RYZ/login-image.png' />

            <SignBtn onClick={() => signInWithPopup(auth, provider)} >
                Sign in with Google🍭
            </SignBtn>
            
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`flex flex-col bg-gray-200 h-screen w-screen p-4  `

const SignBtn = tw.button`
bg-black text-white py-4 mt-4 text-center self-center w-full cursor-pointer font-bold
`
const UberLogo = tw.img`h-20 w-auto object-contain self-start`

const Title = tw.div`text-5xl pt-4 text-gray-500 `

const HeadImg = tw.img`object-contain w-full`
