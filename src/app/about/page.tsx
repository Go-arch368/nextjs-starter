"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
const About = () => {
    const {isSignedIn, user,isLoaded} = useUser()
    if(!isLoaded) return <div>Loading...</div>
    if(!isSignedIn) return <div>Please sign in to view this page</div>
    return <div>Hello {user.firstName}!</div>
}

export default About
