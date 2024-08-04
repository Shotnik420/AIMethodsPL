import "../styles/event.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TiDelete } from "react-icons/ti";
export default function EditEvents(props) {
  const fileServerAdress = props.FSA;
  const [events, setEvents] = useState([
    {
      id: 1,
      date: "11.9.2001",
      type: "Tytul",
      text: "lorem ipsum bim bam booom ijdsadhasdhasbbcdj cbdshjbcajbc ascbhasc jadc asbjc",
    },
  ]);
  const [eventAmount, setEventAmount] = useState(1);

  useEffect(() => {
    setEventAmount(events.length);
  }, [events]);

  useEffect(() => {
    axios
      .get(fileServerAdress + "/posts")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  function addEvent() {
    setEvents([
      ...events,
      { id: events.length + 1, date: "", type: "", text: "" },
    ]);
  }

  function removeEvent(index) {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  }

  function handleChange(key, field, value) {
    const newEvents = events.map((event, index) => {
      if (index === key) {
        return { ...event, [field]: value };
      }
      return event;
    });
    setEvents(newEvents);
  }

  function sendEvents() {
    console.log(events);
    axios
      .put(fileServerAdress + "/posts", events)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending posts:", error);
      });
  }

  return (
    <>
      <div id="editEventsMain">
        <h2>Edycja Wydarzeń</h2>
        <div id="eventHeader">
          <h2>Ilość eventów:</h2>
          <h1 id="eventAmount">{eventAmount}</h1>
          <button id="plusEvent" onClick={addEvent}>
            +
          </button>

          <button id="saveEvent" onClick={sendEvents}>
            Zapisz
          </button>
        </div>
        <div id="eventContainer">
          {events.map((event, key) => (
            <EventItem
              key={key}
              index={key}
              event={event}
              onChange={handleChange}
              onDelete={removeEvent}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function EventItem({ index, event, onChange, onDelete }) {
  return (
    <div className="eventItem">
      <div className="eventUp">
        <div className="eventDateContainer">
          <input
            type="date"
            className="eventItemDate"
            value={event.date}
            onChange={(e) => onChange(index, "date", e.target.value)}
          />
        </div>
        <div className="eventContentContainer">
          <input
            type="text"
            placeholder="Typ wydarzenia"
            className="eventItemType"
            value={event.type}
            onChange={(e) => onChange(index, "type", e.target.value)}
          />
        </div>
      </div>
      <div className="eventDown">
        <textarea
          className="eventItemText"
          placeholder="Tekst Wydarzenia"
          value={event.text}
          onChange={(e) => onChange(index, "text", e.target.value)}
        />
      </div>
      <div className="eventItemDelete" onClick={() => onDelete(index)}>
        <TiDelete />
      </div>
    </div>
  );
}
