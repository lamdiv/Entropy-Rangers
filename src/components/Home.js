import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <!-- Featured --> */}
      <section className="mt-16">
        <div className="container mx-auto px-2 md:px-0">
          {/* Featured Heading */}
          <h1 className="text-2xl text-center md:text-start font-bold space-y-3 mb-5 text-dark">
            Featured Events
          </h1>
          <div className="w-full space-y-10">
            {/* Featured 1 */}
            <div className=" flex flex-col space-y-10 mx-auto md:flex-row md:space-y-0 md:space-x-10 ">
              {/* <!--  Image --> */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-[300px] lg:h-[350]">
                  <img
                    className="mb-10 z-1 w-full h-full  object-cover rounded-2xl md:mb-0"
                    src="https://auraed.org/assets/images/about.webp"
                    alt="story"
                  />
                  {/* <div className="absolute bottom-2 w-full flex justify-center">
                    <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                      <p className="text-dark text-sm font-semibold">Onsite</p>

                      {/* Up Arrow Icon */}
                      {/* <svg
                        width="12"
                        height="16"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                          fill="#358600"
                        />
                      </svg> */}

                      {/* <p className="text-primary text-sm font-bold">169</p> */}

                      {/* Down Arrow Icon */}
                      {/* <svg
                        width="12"
                        height="16"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                          stroke="#756868"
                        />
                      </svg> */}

                      {/* <p className="text-dark text-sm font-semibold">Online</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <!-- Content --> */}
              <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-dark">
                    Open session on Blockchain
                  </h2>
                  <div className="flex justify-center md:justify-start space-x-2 text-primary items-center">
                    <div className="border text-sm lg:text-md rounded-full border-primary px-2">
                      In person
                    </div>

                    <div className="flex space-x-1 items-center">
                      {/* Location Icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 34 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 22.9167C20.1756 22.9167 22.75 20.3423 22.75 17.1667C22.75 13.991 20.1756 11.4167 17 11.4167C13.8244 11.4167 11.25 13.991 11.25 17.1667C11.25 20.3423 13.8244 22.9167 17 22.9167Z"
                          stroke="#358600"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 1.83334C12.9333 1.83334 9.03321 3.44881 6.15766 6.32437C3.2821 9.19992 1.66663 13.1 1.66663 17.1667C1.66663 20.793 2.43713 23.1658 4.54163 25.7917L17 40.1667L29.4583 25.7917C31.5628 23.1658 32.3333 20.793 32.3333 17.1667C32.3333 13.1 30.7178 9.19992 27.8423 6.32437C24.9667 3.44881 21.0666 1.83334 17 1.83334V1.83334Z"
                          stroke="#358600"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <p className="text-sm lg:text-md">Berlin, Germany</p>
                    </div>

                    <div className="flex space-x-1 items-center">
                      {/* Clock Icon */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 47 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.5 3.91666C12.7017 3.91666 3.91663 12.7017 3.91663 23.5C3.91663 34.2982 12.7017 43.0833 23.5 43.0833C34.2982 43.0833 43.0833 34.2982 43.0833 23.5C43.0833 12.7017 34.2982 3.91666 23.5 3.91666ZM23.5 39.1667C14.8617 39.1667 7.83329 32.1382 7.83329 23.5C7.83329 14.8618 14.8617 7.83333 23.5 7.83333C32.1382 7.83333 39.1666 14.8618 39.1666 23.5C39.1666 32.1382 32.1382 39.1667 23.5 39.1667Z"
                          fill="#358600"
                        />
                        <path
                          d="M25.4583 13.7083H21.5416V24.3108L27.9904 30.7595L30.7595 27.9905L25.4583 22.6893V13.7083Z"
                          fill="#358600"
                        />
                      </svg>

                      <p className="text-sm lg:text-md">Aug 2, 12:00 PM</p>
                    </div>
                  </div>

                  <p className="text-sm text-dark">
                    As the bitter fact hits harshly, many children in our
                    country still lack the privilege of quality education though
                    undeniably education is one of the basic needs for everyone.
                    With the hope of addressing and collaboratively working upon
                    this dark problem,
                  </p>
                </div>
                <div className="flex w-full justify-between space-x-2">
                  <Link
                    to="/event"
                    className="p-2 w-1/3 h-full text-sm md:text-lg lg:text-xl text-center self-center font-semibold text-white bg-primaryDark rounded-xl"
                  >
                    View
                    <br />
                    Details
                  </Link>
                  <div className="p-2 w-1/3 h-full text-sm text-center text-[#0400C8] bg-[#F3F2FF] rounded-xl">
                    <span className="text-md lg:text-xl font-bold">69</span>
                    <br />
                    People Joined
                  </div>
                  <div className="p-2 w-1/3 h-full  text-sm text-center text-[#FF0000] bg-[#FFEEEE] rounded-xl">
                    <span className="text-md lg:text-xl font-bold">250 kg</span>
                    <br />
                    Co2 Calculated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="mt-16">
        <div className="container mx-auto px-2 md:px-0">
          {/* Nearby Heading */}
          <h1 className="text-2xl text-center md:text-start font-bold space-y-3 mb-5 text-dark">
            Nearby Events
          </h1>

          <div className="flex flex-col justify-between mt-10 space-y-10 md:grid md:grid-cols-3 md:gap-4 md:gap-y-10 md:space-y-0">
            {/* <!-- Event 1 --> */}
            <div className="flex flex-col justify-between w-full space-y-3">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-[300px] object-cover"
                  src="https://auraed.org/assets/images/events/image_01.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                    <p className="text-dark text-sm font-semibold">Onsite</p>
                    {/* Up Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                        fill="#358600"
                      />
                    </svg> */}

                    {/* <p className="text-primary text-sm font-bold">169</p> */}

                    {/* Down Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                        stroke="#756868"
                      />
                    </svg>

                    <p className="text-dark text-sm font-semibold">Online</p>
                  </div>
                </div> */}
              </div>

              <div className="flex flex-col justify-between space-y-6 text-center md:text-start">
                <div className="space-y-2">
                  <Link to="/event" className="text-xl font-semibold text-primary cursor-pointer ">
                    Open Space Challenge
                  </Link>
                  <p className="text-md text-dark">Kathmandu, Nepal</p>
                  <p className="text-sm text-dark">12:00 PM Oct 12</p>
                </div>
              </div>
            </div>

            {/* <!-- Event 2 --> */}
            <div className="flex flex-col justify-between w-full space-y-3">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-[300px] object-cover"
                  src="https://auraed.org/assets/images/events/image_01.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                    <p className="text-dark text-sm font-semibold">Onsite</p>
                    {/* Up Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                        fill="#358600"
                      />
                    </svg>

                    <p className="text-primary text-sm font-bold">169</p>

                    {/* Down Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                        stroke="#756868"
                      />
                    </svg>
                    <p className="text-dark text-sm font-semibold">Online</p>
                  </div>
                </div> */}
              </div>

              <div className="flex flex-col justify-between space-y-6 text-center md:text-start">
                <div className="space-y-2">
                  <Link to="/event" className="text-xl font-semibold text-primary cursor-pointer ">
                    Open Space Challenge
                  </Link>
                  <p className="text-md text-dark">Kathmandu, Nepal</p>
                  <p className="text-sm text-dark">12:00 PM Oct 12</p>
                </div>
              </div>
            </div>

            {/* <!-- Event 3 --> */}
            <div className="flex flex-col justify-between w-full space-y-3">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-[300px] object-cover"
                  src="https://auraed.org/assets/images/events/image_01.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                    <p className="text-dark text-sm font-semibold">Onsite</p>
                    {/* Up Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                        fill="#358600"
                      />
                    </svg>

                    <p className="text-primary text-sm font-bold">169</p> */}

                    {/* Down Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                        stroke="#756868"
                      />
                    </svg>
                    <p className="text-dark text-sm font-semibold">Online</p>
                  </div>
                </div> */} 
              </div>

              <div className="flex flex-col justify-between space-y-6 text-center md:text-start">
                <div className="space-y-2">
                  <Link to="/event" className="text-xl font-semibold text-primary cursor-pointer ">
                    Open Space Challenge
                  </Link>
                  <p className="text-md text-dark">Kathmandu, Nepal</p>
                  <p className="text-sm text-dark">12:00 PM Oct 12</p>
                </div>
              </div>
            </div>

            {/* <!-- Event 4 --> */}
            <div className="flex flex-col justify-between w-full space-y-3">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-[300px] object-cover"
                  src="https://auraed.org/assets/images/events/image_01.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                    <p className="text-dark text-sm font-semibold">Onsite</p>
                    {/* Up Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                        fill="#358600"
                      />
                    </svg>

                    <p className="text-primary text-sm font-bold">169</p> */}

                    {/* Down Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                        stroke="#756868"
                      />
                    </svg>
                    <p className="text-dark text-sm font-semibold">Online</p>
                  </div>
                </div> */} 
              </div>

              <div className="flex flex-col justify-between space-y-6 text-center md:text-start">
                <div className="space-y-2">
                  <Link to="/event" className="text-xl font-semibold text-primary cursor-pointer ">
                    Open Space Challenge
                  </Link>
                  <p className="text-md text-dark">Kathmandu, Nepal</p>
                  <p className="text-sm text-dark">12:00 PM Oct 12</p>
                </div>
              </div>
            </div>

            {/* <!-- Event 5 --> */}
            <div className="flex flex-col justify-between w-full space-y-3">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-[300px] object-cover"
                  src="https://auraed.org/assets/images/events/image_01.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                    <p className="text-dark text-sm font-semibold">Onsite</p>
                    {/* Up Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                        fill="#358600"
                      />
                    </svg>

                    <p className="text-primary text-sm font-bold">169</p> */}

                    {/* Down Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                        stroke="#756868"
                      />
                    </svg>
                    <p className="text-dark text-sm font-semibold">Online</p>
                  </div>
                </div> */} 
              </div>

              <div className="flex flex-col justify-between space-y-6 text-center md:text-start">
                <div className="space-y-2">
                  <Link to="/event" className="text-xl font-semibold text-primary cursor-pointer ">
                    Open Space Challenge
                  </Link>
                  <p className="text-md text-dark">Kathmandu, Nepal</p>
                  <p className="text-sm text-dark">12:00 PM Oct 12</p>
                </div>
              </div>
            </div>

            {/* <!-- Event 6 --> */}
            <div className="flex flex-col justify-between w-full space-y-3">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-[300px] object-cover"
                  src="https://auraed.org/assets/images/events/image_01.webp"
                  alt=""
                />
                {/* <div className="absolute bottom-2 w-full flex justify-center">
                  <div className="flex items-center rounded-full py-2 px-4 w-max bg-white space-x-2">
                    <p className="text-dark text-sm font-semibold">Onsite</p>
                    {/* Up Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H12C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V12H17C17.1883 11.9997 17.3726 11.9463 17.5319 11.8459C17.6912 11.7455 17.819 11.6023 17.9005 11.4326C17.9821 11.2629 18.0141 11.0737 17.993 10.8866C17.9718 10.6995 17.8984 10.5222 17.781 10.375L9.781 0.374988C9.4 -0.100012 8.6 -0.100012 8.219 0.374988L0.219 10.375C0.101639 10.5222 0.0281709 10.6995 0.00703222 10.8866C-0.0141065 11.0737 0.017941 11.2629 0.0994948 11.4326C0.181048 11.6023 0.308802 11.7455 0.468088 11.8459C0.627374 11.9463 0.811734 11.9997 1 12V12Z"
                        fill="#358600"
                      />
                    </svg>

                    <p className="text-primary text-sm font-bold">169</p> */}

                    {/* Down Arrow Icon */}
                    {/* <svg
                      width="12"
                      height="16"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.00001V8.50001L13 8.50001L16.9991 8.50001C16.9993 8.50001 16.9994 8.50001 16.9996 8.50001C17.0937 8.50026 17.1858 8.52698 17.2654 8.57713C17.3451 8.62736 17.409 8.69906 17.4499 8.78399C17.4907 8.86892 17.5067 8.96363 17.4961 9.05726C17.4856 9.15082 17.4488 9.23951 17.3902 9.31315C17.3901 9.31321 17.3901 9.31327 17.39 9.31332L9.39097 19.3122C9.39094 19.3122 9.39092 19.3122 9.3909 19.3122C9.21004 19.5376 8.78996 19.5376 8.6091 19.3122C8.60908 19.3122 8.60906 19.3122 8.60903 19.3122L0.609961 9.31332C0.551222 9.23965 0.51445 9.1509 0.50387 9.05726C0.49329 8.96363 0.509331 8.86892 0.550148 8.78399C0.590965 8.69906 0.654907 8.62736 0.734629 8.57713C0.814226 8.52698 0.906334 8.50026 1.00041 8.50001C1.00056 8.50001 1.0007 8.50001 1.00085 8.50001L5 8.50001H5.5V8.00001L5.5 1.00001C5.5 0.867403 5.55268 0.740225 5.64645 0.646458C5.74021 0.552691 5.86739 0.500011 6 0.500011L12 0.500011C12.1326 0.500011 12.2598 0.552691 12.3536 0.646458C12.4473 0.740225 12.5 0.867403 12.5 1.00001L12.5 8.00001Z"
                        stroke="#756868"
                      />
                    </svg>
                    <p className="text-dark text-sm font-semibold">Online</p>
                  </div>
                </div> */} 
              </div>

              <div className="flex flex-col justify-between space-y-6 text-center md:text-start">
                <div className="space-y-2">
                  <Link to="/event" className="text-xl font-semibold text-primary cursor-pointer ">
                    Open Space Challenge
                  </Link>
                  <p className="text-md text-dark">Kathmandu, Nepal</p>
                  <p className="text-sm text-dark">12:00 PM Oct 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
