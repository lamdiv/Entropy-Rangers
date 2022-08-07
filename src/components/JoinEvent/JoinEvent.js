import { Popover, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChooseLocation from "./ChooseLocation";
import ChooseMethod from "./ChooseMethod";
import DietryCategory from "./DietryCategory";
import Electricity from "./Electricity";
import Transportation from "./Transportation";
import useFetch from "../../api/useFetch";

const ActiveText = [
  "How would you like to join this event?",
  "Where you will be joining from?",
  "How are you planning to travel?",
  "What is your food type?",
  "What type of electricity you consume?",
];

function JoinEvent() {
  const [step, setStep] = useState(1);
  const [carbonAmount, setcarbonAmount] = useState(0);
  const [parameters, setParameters] = useState({
    method: "",
    location: "",
    transportation: "",
    food_type: "",
    food_quantity: 0,
  });
  const { fetchLatLng, latlngError, isLatLngPending } = useFetch('http://localhost:8000/fetch_lat_lng?address=New York');

  console.log("fetchLatLng", fetchLatLng);
  console.log(latlngError)
  console.log(isLatLngPending)


  const { fetchGeoDistance, geoDistanceError, isGeoDistancePending } = useFetch('http://localhost:8000/get_geodesic_distance?lat1=40.730610&lon1=-73.935242&lat2=40.730610&lon2=-73.935242');

  console.log("fetchGeoDistance", fetchGeoDistance);
  console.log(geoDistanceError)
  console.log(isGeoDistancePending)

  const { fetchFactorData, factorDataError, isFactorDataPending } = useFetch('http://localhost:8000/get_factor_data');

  console.log("fetchFactorData", fetchFactorData);
  console.log(factorDataError)
  console.log(isFactorDataPending)

  const { fetchSourceAirport, sourceAirportError, isSourceAirportPending } = useFetch('http://localhost:8000/get_nearest_airport?lat=40.730610&lon=-73.935242');

  console.log("fetchSourceAirport", fetchSourceAirport);
  console.log(sourceAirportError)
  console.log(isSourceAirportPending)

  const { fetchDestinationAirport, destinationAirportError, isDestinationAirportPending } = useFetch('http://localhost:8000/get_nearest_airport?lat=40.730610&lon=-73.935242');

  console.log("fetchDestinationAirport", fetchDestinationAirport);
  console.log(destinationAirportError)
  console.log(isDestinationAirportPending)


  useEffect(() => {
    let navbar = document.querySelector("#navbar");
    let footer = document.querySelector("#footer");

    if (navbar && footer) {
      navbar.style.display = "none";
      footer.style.display = "none";
    }

    return () => {
      if (navbar) {
        navbar.style.display = "block";
        footer.style.display = "block";
      }
    };
  }, []);

  const prevStep = () => {
    setStep((prevState) => prevState - 1);
  };

  // Form Component Decrement
  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const onParameterChange = (e, name) => {
    if (name) {
      setParameters({ ...parameters, ...name });
    } else {
      setParameters({ ...parameters, [e.target.name]: e.target.value });
    }
  };

  console.log(parameters);

  // Switching between form component
  let formComponent;
  switch (step) {
    case 1:
      // setActiveTitle('')
      formComponent = (
        <ChooseMethod
          nextStep={nextStep}
          values={parameters}
          onChange={onParameterChange}
        />
      );
      break;

    case 2:
      formComponent = (
        <ChooseLocation
          nextStep={nextStep}
          prevStep={prevStep}
          values={parameters}
          onChange={onParameterChange}
        />
      );
      break;
    case 3:
      formComponent = (
        <Transportation
          nextStep={nextStep}
          prevStep={prevStep}
          values={parameters}
          onChange={onParameterChange}
        />
      );
      break;

    case 4:
      formComponent = (
        <DietryCategory  nextStep={nextStep}
        prevStep={prevStep}
        values={parameters}
        onChange={onParameterChange} />
      );
      break;

    case 5:
      formComponent = <Electricity nextStep={nextStep} prevStep={prevStep} values={parameters}
      onChange={onParameterChange} />;
      break;

    default:
      return formComponent;
  }

  return (
    <div className="flex w-full h-[100vh]">
      <div className="w-1/2 px-12 py-10  bg-[#1E4A01]">
        <Link to="/" className="text-xl w-full text-primary mb-6 font-bold">
          Entropy <span className="text-white font-extrabold">RANGERS</span>
        </Link>
        <div className="flex flex-col h-full justify-center w-full text-white text-5xl font-bold">
          {ActiveText[step - 1]}
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-between px-12 py-10">
        <div className="flex flex-col">
          <Popover className="relative self-end">
            <Popover.Button className="hidden outline-none py-2 px-6 font-semibold border border-dark text-dark rounded-full md:block">
              {" "}
              <div className="flex space-x-3 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6362 17.134C19.1388 15.9558 18.417 14.8857 17.511 13.9831C16.6077 13.0779 15.5377 12.3563 14.3601 11.8579C14.3496 11.8526 14.339 11.85 14.3285 11.8447C15.9711 10.6582 17.039 8.72549 17.039 6.54492C17.039 2.93262 14.1122 0.00585938 10.4999 0.00585938C6.88764 0.00585938 3.96088 2.93262 3.96088 6.54492C3.96088 8.72549 5.02875 10.6582 6.67143 11.8474C6.66088 11.8526 6.65033 11.8553 6.63979 11.8605C5.45854 12.3589 4.39858 13.0734 3.48891 13.9857C2.58375 14.889 1.86206 15.959 1.36371 17.1366C0.874133 18.2895 0.610092 19.5256 0.585881 20.7779C0.585178 20.8061 0.590114 20.8341 0.600399 20.8603C0.610684 20.8865 0.62611 20.9104 0.645768 20.9305C0.665425 20.9507 0.688918 20.9667 0.71486 20.9776C0.740802 20.9885 0.768669 20.9941 0.796819 20.9941H2.37885C2.49487 20.9941 2.58715 20.9019 2.58979 20.7885C2.64252 18.7529 3.4599 16.8466 4.90483 15.4017C6.39985 13.9066 8.3853 13.084 10.4999 13.084C12.6146 13.084 14.6 13.9066 16.0951 15.4017C17.54 16.8466 18.3574 18.7529 18.4101 20.7885C18.4127 20.9045 18.505 20.9941 18.621 20.9941H20.2031C20.2312 20.9941 20.2591 20.9885 20.285 20.9776C20.311 20.9667 20.3345 20.9507 20.3541 20.9305C20.3738 20.9104 20.3892 20.8865 20.3995 20.8603C20.4098 20.8341 20.4147 20.8061 20.414 20.7779C20.3876 19.5176 20.1266 18.2915 19.6362 17.134V17.134ZM10.4999 11.0801C9.28969 11.0801 8.15063 10.6081 7.29369 9.75117C6.43676 8.89424 5.96479 7.75518 5.96479 6.54492C5.96479 5.33467 6.43676 4.19561 7.29369 3.33867C8.15063 2.48174 9.28969 2.00977 10.4999 2.00977C11.7102 2.00977 12.8493 2.48174 13.7062 3.33867C14.5631 4.19561 15.0351 5.33467 15.0351 6.54492C15.0351 7.75518 14.5631 8.89424 13.7062 9.75117C12.8493 10.6081 11.7102 11.0801 10.4999 11.0801Z"
                    fill="#403939"
                  />
                </svg>

                <p className="text-md">Diwash</p>
              </div>
            </Popover.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {/* Mark this component as `static` */}
              <Popover.Panel
                className="absolute bg-white shadow-md rounded-xl z-10 right-0 px-10 py-6"
                static
              >
                <div className="flex flex-col space-y-2 text-md font-medium text-dark">
                  <Popover.Button as={Link} to="/account/user">
                    Profile
                  </Popover.Button>
                  <Popover.Button as={Link} to="/">
                    Logout
                  </Popover.Button>
                </div>{" "}
              </Popover.Panel>
            </Transition>
          </Popover>

          <div className="mt-8 flex space-x-5 items-center">
            <div className="p-5 text-primary font-bold self-center border-2 border-primary rounded-[50%]">
              {carbonAmount}KG
            </div>
            <h1 className="text-md font-semibold text-dark">
              Live Carbon Counter
            </h1>
          </div>
        </div>
        {formComponent}
      </div>
    </div>
  );
}

export default JoinEvent;
