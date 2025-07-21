import React from 'react'
import { Outlet } from 'react-router-dom'
import Optionbox from '../components/Optionsbox'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Options() {
    return (
        <> <Nav />
           <div className='d-flex flex-direction-row gap-4 mx-auto'> <Optionbox />
            <Outlet /> </div>
            <Footer />
            </>
    )
}

export default Options