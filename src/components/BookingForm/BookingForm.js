import React, { useState } from 'react'
import './bookingForm.css'



const BookingForm = () => {

    const [reservationDetails, setReservationDetails] = useState({
        date: null,
        time: null,
        guests: 0,
        occassion: null
    })
    const [isReserved, setIsReserved] = useState(false)

    const handleChange = ({ target }) => {

        let field = target.dataset.type

        switch (field) {
            case "day":
                const formattedDate = new Date(target.value).toLocaleDateString('en-gb', { year: 'numeric', month: 'long', day: 'numeric' });
                setReservationDetails({
                    ...reservationDetails,
                    date: formattedDate
                })
                console.log(`The date selected was ${formattedDate}`);
                break;
            case "time":
                setReservationDetails({
                    ...reservationDetails,
                    time: target.value
                })
                console.log(`The time selected was ${target.value}`);
                break;
            case "guests":
                setReservationDetails({
                    ...reservationDetails,
                    guests: target.value
                })
                console.log(`There are ${target.value} guests expected`);
                break;
            case "occassion":
                setReservationDetails({
                    ...reservationDetails,
                    occassion: target.value
                })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsReserved(true);
        console.log(reservationDetails);
    }

    return (
        <>
            {isReserved &&
                <div className='reservation-confirmation'>
                    <h2> Thank you for your reservation!</h2>
                    <p>Here are your reservation details.</p>
                    <p><strong>Day</strong>: {reservationDetails.date}</p>
                    <p><strong>Time</strong>: {reservationDetails.time}</p>
                    <p><strong>Guests</strong>: {reservationDetails.guests}</p>
                    <p><strong>Occassion</strong>: {reservationDetails.occassion}</p>
                </div>
            }
            {!isReserved &&
                <form className='booking-form' onSubmit={handleSubmit}>
                    <label>
                        Pick a Day
                    </label>
                    <input required data-type="day" type="date" onChange={handleChange} />
                    <label>
                        Pick a Time
                    </label>
                    <select required data-type="time" onChange={handleChange}>
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
                    <label>
                        How Many Guests?
                    </label>
                    <select required data-type="guests" onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    <label>
                        Occassion
                    </label>
                    <select data-type="occassion" onChange={handleChange}>
                            <option selected="selected">None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    <input data-type="button" type="submit" value="Book" />
                </form>
            }


        </>
    )
}

export default BookingForm