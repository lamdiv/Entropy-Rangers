import React from "react";

function EventInfo(props) {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl text-dark xxl:text-2xl font-bold">
        Create an Event
      </h2>
      <p className="text-sm text-dark">
        {" "}
        Start an event and track the carbon emission each time user joi the
        event.
      </p>
      <div className="text-left w-full mt-6">
        <label className="text-gray-700 font-semibold">Event Name</label>
        <input
          type="text"
          name="name"
          value={props.values.name}
          onChange={(e) => props.onChange(e)}
          placeholder="Enter title of the event"
          className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
        />
      </div>
      <div className="text-left w-full mt-4">
        <label className="text-gray-700 font-medium">Description</label>
        <textarea
          name="description"
          value={props.values.description}
          onChange={(e) => props.onChange(e)}
          placeholder="Enter Description"
          className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={props.nextStep}
          className="w-full rounded-md flex items-center justify-center py-2 px- border text-md font-bold text-white bg-primaryDark hover:bg-primary duration-300 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EventInfo;
