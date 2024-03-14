import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// export default function Daypicker() {
//   const [selected, setSelected] = useState(new Date());

//   const handleDayChange = (date) => {
//     setSelected(date);
//   };

//   return (
//     <DayPicker
//       selected={selected}
//       onSelect={setSelected}
//       onChange={handleDayChange}
//       dateFormat="MMMM ,d,yyyy"
//       className="select select-bordered max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]"
//     />
//   );
// }
export function Daypicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Handle calendar changes here
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy"
      className="select select-bordered max-w-xs w-[168px]  text-[#0F172A]   not-italic bg-[#F9FAFB]"
    />
  );
}

export function Timepicker() {
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    // Handle time changes here
  };

  return (
    <DatePicker
      selected={selectedTime}
      onChange={handleTimeChange}
      showTimeSelect
      showTimeSelectOnly
      timeFormat="HH:mm"
      timeCaption="Time"
      dateFormat="h:mm aa"
      className="select select-bordered max-w-xs w-[168px] text-[#0F172A] text-base font-normal not-italic bg-[#F9FAFB]"
    />
  );
}
