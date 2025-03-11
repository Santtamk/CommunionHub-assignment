import React, { useState } from "react";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CardCom from "../components/CardCom";
import Form from "../components/Form";

const Events = () => {
  const initialEvents = [
    {
      id: 1,
      title: "Charity Drive",
      date: "2025-03-15",
      location: "City Hall",
      category: "Charity",
    },
    {
      id: 2,
      title: "Interfaith Dialogue",
      date: "2025-03-20",
      location: "Community Center",
      category: "Religious",
    },
  ];
  const [allEvents, setAllEvents] = useState(initialEvents); // Store in main event list
  const [events, setEvents] = useState(initialEvents); // Update displayed events
  const [showForm, setShowForm] = useState(false);
  const [filteredEvent, setFilteredEvent] = useState("");

  const formView = () => {
    setShowForm((prevState) => !prevState);
  };

  const addEvent = (newEvent) => {
    setAllEvents((prev) => [...prev, newEvent]); // Store in main event list
    setEvents((prev) => [...prev, newEvent]); // Update displayed events
  };

  const filterCategory = (value) => {
    setFilteredEvent(value);
    if (value === "") {
      setEvents(allEvents); // Reset to all events
    } else {
      const category = allEvents.filter((event) => event.category === value);
      setEvents(category);
    }
  };

  return (
    <div className="p-10">
      <div>
        <FloatButton
          icon={<PlusOutlined />}
          style={{
            width: 50,
            height: 50,
          }}
          tooltip={<div>Add Event</div>}
          onClick={() => formView()}
        >
          Add Event
        </FloatButton>
      </div>
      {showForm && <Form formView={formView} addEvent={addEvent} />}
      <div className="flex gap-3">
        <div className="text-2xl font-thin">Upcoming Events</div>

        <div className="mb-6 flex items-center">
          {/* <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Filter By Category
          </label> */}
          <select
            name="cars"
            id="cars"
            className="shadow border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={filteredEvent}
            onChange={(e) => filterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>
      </div>

      <ul className="mt-4 flex gap-5 flex-wrap justify-center">
        {events.map((event) => (
          <div
            className="shadow-l overflow-hidden max-w-sm rounded hover:shadow-xl cursor-pointer"
            key={event.id}
          >
            <CardCom
              title={event.title}
              date={event.date}
              location={event.location}
              category={event.category}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Events;
