import React from 'react'
import AboutFonding from '../../AboutFonding'
import AboutHomeSection from '../../AboutHomeSection'
import AboutOurTeam from '../../AboutOurTeam'
import Footer from '../../Footer'
import Navbar from '../../Navbar'

function AboutPage() {
    return (
        <>
            <Navbar></Navbar>
            <AboutHomeSection></AboutHomeSection>
            <AboutFonding></AboutFonding>
            <AboutOurTeam></AboutOurTeam>
            <Footer></Footer>
        </>
    )
}

export default AboutPage