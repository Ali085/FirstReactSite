import React from 'react'
import Blog from '../../Blog'
import Ceo from '../../Ceo'
import Footer from '../../Footer'
import HomeSection from '../../HomeSection'
import Navbar from '../../Navbar'
import Signup from '../../Signup'
import StartBuilding from '../../StartBuilding'

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <HomeSection></HomeSection>
            <StartBuilding></StartBuilding>
            <Ceo></Ceo>
            <Blog></Blog>
            <Signup></Signup>
            <Footer></Footer>
        </>
    )
}

export default Home