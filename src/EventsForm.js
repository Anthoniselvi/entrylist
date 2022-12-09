import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

const getDatafromEvent = () => {
  const data = localStorage.getItem("eventss");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function EventsForm() {
  const [eventss, setEventss] = useState(getDatafromEvent());
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    let events = {
      name,
      place,
      date,
    };
    setEventss([...eventss, events]);
    setName("");
    setPlace("");
    setDate("");
  };

  useEffect(() => {
    localStorage.setItem("eventss", JSON.stringify(eventss));
  }, [eventss]);

  return (
    <div className="form-container">
      <div>
        {show ? (
          <form onSubmit={handleSubmitEvent}>
            <h1>Add New Event</h1>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Event Name"
            />
            <input
              type="text"
              required
              name="place"
              onChange={(e) => setPlace(e.target.value)}
              value={place}
              placeholder="Place"
            />
            <input
              type="date"
              required
              name="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            <button type="submit" onClick={() => setShow(!show)}>
              Add Event
            </button>
          </form>
        ) : (
          <div>
            {eventss.length > 0 && (
              <>
                <div>
                  <h1>Event List</h1>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Dashboard eventss={eventss} />
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {eventss.length < 1 && null}
          </div>
        )}
      </div>
    </div>
  );
}
