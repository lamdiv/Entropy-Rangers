import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import EventInfo from "./EventInfo";
import EventLocation from "./EventLocation";
import EventCategory from "./EventCategory";
import Success from "./Success";
import { useNavigate } from "react-router";

function CreateEvent(props) {
  const [step, setStep] = useState(1);
  const [formField, setFormField] = useState({
    name: "",
    description: "",
    location: "",
    time: '',
    type: "",
    thumbnail: "",
  });

  // Clearing Form  and step after creating event
  const clearForm = () =>{
    setFormField({
      name: "",
      description: "",
      location: "",
      time: '',
      type: "",
      thumbnail: "",
    })
    setStep(1)
  }

  // Form Component Increament
  const prevStep = () => {
    setStep((prevState) => prevState - 1);
  };

  // Form Component Decrement
  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  // Form field value change
  const onChangeHandler = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  //Passing Clear fuction to parent
  const closeEventModal = () => {
    props.closeModalHandler(clearForm)
  }

  // Switching between form component
  let formComponent;
  switch (step) {
    case 1:
      formComponent = (
        <EventInfo
          nextStep={nextStep}
          onChange={onChangeHandler}
          values={formField}
        />
      );
      break;
    case 2:
      formComponent = (
        <EventLocation
          prevStep={prevStep}
          nextStep={nextStep}
          onChange={onChangeHandler}
          values={formField}
        />
      );
      break;
    case 3:
      formComponent = (
        <EventCategory
          prevStep={prevStep}
          nextStep={nextStep}
          onChange={onChangeHandler}
          values={formField}
        />
      );
      break;

    case 4:
      formComponent = <Success onDispatch={closeEventModal}/>;
      break;

    default:
    
    return formComponent;
  }

  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog className="relative z-20" onClose={closeEventModal}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-30"
            aria-hidden="true"
          />
        </Transition.Child>

        {/* Full-screen container to center the panel */}

        <Transition.Child
          as={Fragment}
          enter="ease duration-200"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="ease-out duration-200"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-full opacity-0"
        >
          <div
            className={`fixed inset-0 flex items-end sm:items-center justify-center sm:p-4`}
          >
            <Dialog.Panel className="sm:max-w-sm bg-white w-full sm:w-[390px] z-10 mx-auto p-4 backdrop-blur-lg  rounded-xl">
              <div className="fixed">
                <div
                  onClick={closeEventModal}
                  className="bg-gray-100 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer self-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="#63C132"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M368 368L144 144M368 144L144 368"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center mt-4">
                <form encType='multipart/form-data'>
                  {formComponent}
                </form>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>

        {/* The actual dialog panel  */}
      </Dialog>
    </Transition>
  );
}

export default CreateEvent;
