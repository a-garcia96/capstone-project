import React, { useState } from 'react'
import "flatpickr/dist/themes/airbnb.css";

import Flatpickr from "react-flatpickr";


const BookingForm = () => {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(null)

    return (
        <form>
            <label>
                Select a Date:
                <Flatpickr
                    value={date}
                    onChange={([date]) => {
                        setDate(date);
                    }}
                    options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                    }}
                />
                <label>
                    Select a Time:
                    <Flatpickr
                        value={time}
                        onChange={(time) => {
                            console.log(time)
                        }}
                        options={{
                            noCalendar: true,
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "h:i:K",
                            time_24hr: false,
                            minTime: "10:00",
                            maxTime: "22:00"
                        }}
                    />
                </label>
            </label>
        </form>
    )
}

export default BookingForm