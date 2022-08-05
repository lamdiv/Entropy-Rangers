import React from "react";

function EventCategory(props) {

  //Submission of form
  const SubmitFormHandler = () =>{
    console.log(props.values);
    props.nextStep();
  }
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
      <div className="text-left w-full mt-4">
        <label className="text-gray-700 font-medium">Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
          value={props.values.thumbnail}
          onChange={(e) => props.onChange(e)}
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
