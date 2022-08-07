import React from "react";
import useFetch from "../../api/useFetch";

function EventCategory(props) {

  // const { fetchLatLng, latlngError, isLatLngPending } = useFetch(`https://co2-calculator-sahajrajmalla.herokuapp.com/fetch_lat_lng?address=${props.values.location}`);

  

  const SubmitFormHandler = (e) =>  {
    props.nextStep();
    e.preventDefault();
    // const blog = {
    //     title, 
    //     body, 
    //     author
    // }
    // console.log(blog);


    // REQUEST SAMPLE
    // const sample_json = {
    //   "name": "string",
    //   "description": "string",

    //   "date": 0,
    //   "time": 0,
    //   "day": 0,
    //   "hour": 0,
    //   "minute": 0,
    //   "thumbnail": "string",
    //   "user_id": 123,
    //   "id": 0,
    //   "created_at": "2022-08-06T12:53:17.993Z",
    //   "modified_at": "2022-08-06T12:53:17.993Z"
    // }

    fetch('https://co2-calculator-sahajrajmalla.herokuapp.com/events/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(props.values)
    }).then((response) =>  {
      console.log(response)
        console.log('New Event Posted!');
        // history.go(-1)
        // history.push('/home')
    }

    )
  }
  //Submission of form
  // const SubmitFormHandler = () =>{
  //   console.log(props.values);
  //   props.nextStep();
  // }
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl text-dark xxl:text-2xl font-bold">
        Almost There!
      </h2>
      <p className="text-sm text-dark">
        {" "}
        We need this data to measure CO2 emission of each user
      </p>{" "}
      <div className="text-left w-full mt-6">
        <label className="text-gray-700 font-semibold">Event Type</label>
        <select
          name="type"
          value={props.values.type}
          onChange={(e) => props.onChange(e)}
          className="block w-full px-3 py-2 mt-1 text-gray-700  border border-gray-300 rounded-md focus:bg-white outline-none"
        >
          <option value="Physical">Physical</option>
          <option value="Online">Online</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
      <div className="flex space-x-2 justify-between mt-4">
        <button
          onClick={props.prevStep}
          className="rounded-md py-2 px-6 border text-md font-bold text-primary border-primary hover:text-white  hover:bg-primaryDark duration-300 focus:outline-none"
        >
          Back
        </button>
        <button
          onClick={SubmitFormHandler}
          
          className="rounded-md  py-2 px-6 border text-md font-bold text-white bg-primaryDark hover:bg-primary duration-300 focus:outline-none"
        >
          Create Now
        </button>
      </div>
    </div>
  );
}

export default EventCategory;
