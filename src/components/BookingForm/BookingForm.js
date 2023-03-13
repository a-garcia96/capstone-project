import React, { useState } from 'react'
import './bookingForm.css'



const BookingForm = () => {

    const handleChange = ({target}) => {
        console.log(target.type === "date" ? "This is a date field" : "no")

        switch(target.type) {
            case "date":
                console.log(`The date selected was ${target.value});
                break;
            case "time":
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <form className='booking-form' onSubmit={handleSubmit}>
            <label>
                Pick a Day
                <input type="date" onChange={handleChange}/>
            </label>
            <label>
                Pick a Time
                <select onChange={handleChange}>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>11:30 AM</option>
                    <option>12:00 PM</option>
                    <option>12:30 PM</option>
                    <option>1:00 PM</option>
                    <option>1:30 PM</option>
                    <option>2:00 PM</option>
                    <option>2:30 PM</option>
                    <option>3:00 PM</option>
                    <option>3:30 PM</option>
                    <option>4:00 PM</option>
                    <option>4:30 AM</option>
                    <option>5:00 PM</option>
                    <option>5:30 PM</option>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                    <option>9:30 PM</option>
                    <option>10:00 PM</option>
                </select>
            </label>
            <label>
                How Many Guests?
                <select onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </label>
            <input type="submit" value="Make Reservation" />
        </form>
    )
}

export default BookingForm