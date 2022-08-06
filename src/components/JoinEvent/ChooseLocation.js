import React from 'react'

function ChooseLocation(props) {
  return (
    <>
    <div className="mt-12 flex flex-col">
      <h1 className="text-2xl font-semibold text-dark">Select Location</h1>
      <p className="text-md text-dark">
        Lorem ipsum dolor sit amet, onsectetur adipiscing elit.{" "}
      </p>
      <div className="flex space-x-5 mt-5 ">
        <div className="flex md:w-1/2 flex-col items-center space-y-2 p-2 rounded-lg border border-dark ">
          <input onChange={(e) => props.onChange(e)} type="text" name='location' value={props.values.location} className='outline-none w-full h-full' placeholder='Your Current Location' />
        </div>

      </div>
    </div>
    <div className="flex flex-row justify-between">
      <h3
        onClick={props.prevStep}
        className="font-bold justify-end text-dark cursor-pointer text-lg"
      >
        Back
      </h3>
      <h3
        onClick={props.nextStep}
        className="font-bold justify-end text-primary cursor-pointer text-lg"
      >
        Next
      </h3>
    </div>
  </>
  )
}

export default ChooseLocation