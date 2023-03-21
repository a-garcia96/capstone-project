import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import BookingForm from '../components/BookingForm/BookingForm'





const Reservations = ({availableTimes, bookingReducer, initialState}) => {

    return (
        <>
            <Nav />
            <header>
                <div className="container">
                    <h1>Make a Reservation</h1>
                </div>
            </header>
            <main>
                <section></section>
                <section>
                    <div className="container">
                        <BookingForm availableTimes={availableTimes}/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Reservations