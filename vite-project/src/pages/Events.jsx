import React, { useState } from "react";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CardCom from "../components/CardCom";
import Form from "../components/Form";

const Events = () => {
  const [events, setEvents] = useState([
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
  ]);
  const [showForm, setShowForm] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const formView = () => {
    setShowForm((prevState) => !prevState);
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
      {showForm && (
        <Form
          formView={formView}
          formSubmit={formSubmit}
          setEvents={setEvents}
        />
      )}
      <h2 className="text-2xl font-thin">Upcoming Events</h2>
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
