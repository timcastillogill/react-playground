// import React, { useState } from "react";
// import HowLongInput from "../HowLongInput/HowLongInput";
// import moment from "moment";
// import "./HowLongCollection.css";

// const HowLongCollection = () => {
//   const [events, setEvents] = useState<OccasionDetails[]>([
//     {
//       id: 1,
//       occasionName: "My Birthday",
//       occasionDate: "2024-02-23",
//       // howLongUntil: "in 2 days",
//     },
//   ]);

//   const handleNewEvent = (eventDate: string, eventName: string) => {
//     var formatDate = eventDate.replace(/-/g, "");
//     if (eventName === "" || eventDate === "") {
//       throw new Error("Input Event name and Event Date");
//     }
//     setEvents([
//       ...events,
//       {
//         id: Math.floor(Math.random() * 1000),
//         occasionName: eventName,
//         occasionDate: eventDate,
//         // howLongUntil: moment(
//         //   (parseInt(formatDate) + 1).toString(),
//         //   "YYYYMMDD"
//         // ).fromNow(),
//       },
//     ]);

//     return false;
//   };

//   return (
//     <div className="eventForm">
//       <HowLongInput addEvent={handleNewEvent} />
//       {/* <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             {`${event.occasionName} starts `}
//             <span id="timeUntil">🎉 {event.howLongUntil} 🎉</span>, we're
//             totally pumped for you!
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

export default {};
