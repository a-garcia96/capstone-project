import React, { useReducer } from 'react'
import { useState, createContext } from 'react';

export const BookingContext = createContext()

const Main = ({ children }) => {

  const [availableTimes, setAvailableTimes] = useState([]);

  const initialState = {
    selectedDate: null,
    selectedTime: null,
    bookedDates: {}
  }

  const bookingReducer = (state, action) => {
    switch (action.type) {
      case 'SELECT_DATE':
        const availableTimesForDate = state.bookedDates[action.payload]
        console.log(availableTimesForDate)
        if(!availableTimesForDate) {
          setAvailableTimes(["select a time", "10:00 AM",
          "10:30 AM",
          "11:00 AM",
          "11:30 AM",
          "12:00 PM",
          "12:30 PM",
          "1:00 PM",
          "1:30 PM",
          "2:00 PM",
          "2:30 PM",
          "3:00 PM",
          "3:30 PM",
          "4:00 PM",
          "4:30 AM",
          "5:00 PM",
          "5:30 PM",
          "6:00 PM",
          "6:30 PM",
          "7:00 PM",
          "7:30 PM",
          "8:00 PM",
          "8:30 PM",
          "9:00 PM",
          "9:30 PM",
          "10:00 PM"]);
        } else if(availableTimesForDate)  {
          setAvailableTimes([...availableTimesForDate])
        }
        return { ...state, selectedDate: action.payload }
      case 'SELECT_TIME':
        return { ...state, selectedTime: action.payload }
      case 'BOOK_TIMESLOT':
        const { date, time } = action.payload
        return {
          ...state,
          selectedDate: null,
          selectedTime: null,
          bookedDates: {
            ...state.bookedDates,
            [date]: [...availableTimes.filter(availableTime => availableTime !== time)]
          }
        }
      default:
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  }


  const [bookingState, bookingDispatch] = useReducer(bookingReducer, initialState)

  return (
    <BookingContext.Provider value={{ bookingState, bookingDispatch, availableTimes }}>
      <main>
        {children}
      </main>
    </BookingContext.Provider >
  )
}

export default Main