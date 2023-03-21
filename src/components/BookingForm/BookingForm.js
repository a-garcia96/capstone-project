import React, { useEffect, useState, useContext } from "react";
import { BookingContext } from "../Main";
import "./bookingForm.css";

const BookingForm = () => {

    const {bookingState, bookingDispatch, availableTimes} = useContext(BookingContext);

    useEffect(() => {
        console.log(bookingState)
    }, [bookingState])

  const [reservationDetails, setReservationDetails] = useState({
    date: null,
    time: null,
    guests: 0,
    occassion: null,
  });
  const [isReserved, setIsReserved] = useState(false);

  const handleChange = ({ target }) => {
    let field = target.dataset.type;

    switch (field) {
      case "day":
        console.log(`The unformatted date is ${target.value}`)
        const formattedDate = new Date(target.value).toLocaleDateString("en-us", { year:"numeric", month: "short", day: "numeric", timeZone: "UTC" });
        console.log(`The formatted date is ${formattedDate}`)
        setReservationDetails({
          ...reservationDetails,
          date: formattedDate,
        });
        bookingDispatch({type: 'SELECT_DATE', payload: formattedDate})
        console.log(`The date selected was ${formattedDate}`)
        break;
      case "time":
        setReservationDetails({
          ...reservationDetails,
          time: target.value,
        })
        bookingDispatch({type: 'SELECT_TIME', payload: target.value})
        console.log(`The time selected was ${target.value}`)
        break;
      case "guests":
        setReservationDetails({
          ...reservationDetails,
          guests: target.value,
        });
        console.log(`There are ${target.value} guests expected`);
        break;
      case "occassion":
        setReservationDetails({
          ...reservationDetails,
          occassion: target.value,
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookingDispatch({type: 'BOOK_TIMESLOT', payload: {date: reservationDetails.date, time: reservationDetails.time }})
    setIsReserved(true);
    console.log(reservationDetails);
  }

  const handleClick = () => {
    setIsReserved(false);
  }

  return (
    <>
      {isReserved && (
        <div className="reservation-confirmation">
          <h2> Thank you for your reservation!</h2>
          <p>Here are your reservation details.</p>
          <p>
            <strong>Day</strong>: {reservationDetails.date}
          </p>
          <p>
            <strong>Time</strong>: {reservationDetails.time}
          </p>
          <p>
            <strong>Guests</strong>: {reservationDetails.guests}
          </p>
          <p>
            <strong>Occassion</strong>: {reservationDetails.occassion}
          </p>
          <button onClick={handleClick} className="btn">Make another reservation</button>
        </div>
      )}
      {!isReserved && (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>Pick a Day</label>
          <input required data-type="day" type="date" onChange={handleChange} />
          <label>Pick a Time</label>
          <select required data-type="time" onChange={handleChange}>
            {availableTimes.map(time => <option key={time}>{time}</option>)}
          </select>
          <label>How Many Guests?</label>
          <select required data-type="guests" onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <label>Occassion</label>
          <select data-type="occassion" onChange={handleChange}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input data-type="button" type="submit" value="Book" />
        </form>
      )}
    </>
  );
};

export default BookingForm;
