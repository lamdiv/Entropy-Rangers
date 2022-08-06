import React from 'react'
import useFetch from "../../api/useFetch";

function EventLocation(props) {
  const { fetchLatLng, latlngError, isLatLngPending } = useFetch('http://localhost:8000/fetch_lat_lng?address=New York');

  console.log("fetchLatLng", fetchLatLng);
  console.log(latlngError)
  console.log(isLatLngPending)

  return (
    <div className="py-8 px-4">
    <h2 className="text-2xl text-dark xxl:text-2xl font-bold">
    When, Where and How?
    </h2>
    <p className="text-sm text-dark">
      {" "}
      We need this data to measure CO2 emission of each user.
    </p>{" "}
    <div className="text-left w-full mt-6">
      <label className="text-gray-700 font-semibold">Location</label>
      <input
        type="text"
        name='location'
        value={props.values.location}
        onChange={(e) => props.onChange(e)}
        placeholder="Where is it happening?"
        className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
      />
    </div>
    <div className="text-left w-full mt-4">
      <label className="text-gray-700 font-medium">Time</label>
      <input
        type="time"
        name='time'
        value={props.values.time}
        onChange={(e) => props.onChange(e)}
        placeholder="Enter the time of the event"
        className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
      />
    </div>
    <div className="flex space-x-2 justify-between mt-4">
    <button
        onClick={props.prevStep}
        className="rounded-md py-2 px-6 border text-md font-bold text-primary border-primary hover:text-white  hover:bg-primaryDark duration-300 focus:outline-none"
      >
        Back
      </button>
      <button
        onClick={props.nextStep}
        className="rounded-md  py-2 px-6 border text-md font-bold text-white bg-primaryDark hover:bg-primary duration-300 focus:outline-none"
      >
        Next
      </button>
    </div>
  </div>
  )
}

export default EventLocation