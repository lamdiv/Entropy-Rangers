import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../api/useFetch";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

export const pieData = {
  labels: ["Transportation", "Diet", "Electricity Usuage"],
  datasets: [
    {
      label: "Co2 Emission in Kg",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
    },
  ],
};




const options = {
  responsive: true,
  radius: "50%",
  cutout: 90,
  plugins: {
    tooltip: {
      padding: 13,
      caretSize: 10,
      backgroundColor: "#01133D",
      displayColors: false,
    },
  },
};






function Event() {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `https://co2-calculator-sahajrajmalla.herokuapp.com/events/${id}`
  );

  
  
  const labels = ['Online', 'Offline'];
  
  const barData = {
    labels,
    datasets: [
      {
        label: "Transportation",
        data:[246, 13],
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Diet",
        data: [938, 379],
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      },
      {
        label: "Electricity Usage",
        data: [878, 640],
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };

  return (
    <>
      {data && (
        <section className="mt-16">
          <div className="container mx-auto px-2 md:px-0">
            <div className="w-full space-y-10">
              <div className="flex flex-col space-y-10 mx-auto md:flex-row md:space-y-0 md:space-x-10 ">
                {/* <!--  Image --> */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-[300px] lg:h-[350]">
                    <img
                      className="mb-10 z-1 w-full h-full  object-cover rounded-2xl md:mb-0"
                      src="https://source.unsplash.com/random/200x200?sig=1"
                      alt="story"
                    />
                  </div>
                </div>

                {/* <!-- Content --> */}
                <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-dark">
                      {data.name}
                    </h2>
                    <div className="flex justify-center md:justify-start space-x-2 text-primary items-center">
                      <div className="border text-sm lg:text-md rounded-full border-primary px-2">
                        {data.join_mode}
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

                        <p className="text-sm lg:text-md">{data.address}</p>
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

                        <p className="text-sm lg:text-md">
                          {data.date}, {data.time}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-dark">{data.description}</p>
                  </div>
                  <div className="flex w-full items-center justify-between space-x-2">
                    <Link
                      to="/event/calculate"
                      className="p-2 w-1/3 h-full text-sm md:text-lg self-center font-semibold text-white bg-primaryDark rounded-xl"
                    >
                      Join
                      <br />
                      and Calculate
                    </Link>
                    <div className="p-2 w-1/3 h-full text-sm text-center text-[#0400C8] bg-[#F3F2FF] rounded-xl">
                      <span className="text-md lg:text-xl font-bold">69</span>
                      <br />
                      People Joined
                    </div>
                    <div className="p-2 w-1/3 h-full  text-sm text-center text-[#FF0000] bg-[#FFEEEE] rounded-xl">
                      <span className="text-md lg:text-xl font-bold">
                        250 kg
                      </span>
                      <br />
                      Co2 Calculated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Statistics */}
      <section className="mt-16">
        <div className="container mx-auto px-2 md:px-0">
          <div className="flex flex-wrap md:flex-nowrap justify-between space-y-10 md:space-x-10 md:space-y-0">
            <div className="w-full md:w-2/3">
              <h1 className="text-2xl text-center md:text-start font-bold space-y-3 mb-5 text-dark">
                Statistics
              </h1>
              <div className="space-y-5 w-full p-6 shadow-md rounded-xl">
                <h3 className="text-md text-dark text-center text-medium">
                  You will emit total of{" "}
                  <span className="text-primary font-semibold">50CO2</span>{" "}
                  during the event
                </h3>
                <div className=" w-full h-full">
                  <Pie data={pieData} options={options} />
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <h1 className="text-2xl text-center md:text-start font-bold space-y-3 mb-5 text-dark">
                Equivalent to yours
              </h1>

              <div className="flex flex-col space-y-5 w-full">
                <div className="flex items-center space-x-4 shadow-md p-6 rounded-lg">
                  <div className="rounded-full bg-[#E4FFD8] p-4">
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
                  </div>
                  <h3 className="text-md text-dark text-medium">
                    You will emit total of{" "}
                    <span className="text-primary font-semibold">50CO2</span>{" "}
                    during the event
                  </h3>
                </div>
                <div className="flex items-center space-x-4 shadow-md p-6 rounded-lg">
                  <div className="rounded-full bg-[#E4FFD8] p-4">
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
                  </div>
                  <h3 className="text-md text-dark text-medium">
                    You will emit total of{" "}
                    <span className="text-primary font-semibold">50CO2</span>{" "}
                    during the event
                  </h3>
                </div>
                <div className="flex items-center space-x-4 shadow-md p-6 rounded-lg">
                  <div className="rounded-full bg-[#E4FFD8] p-4">
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
                  </div>
                  <h3 className="text-md text-dark text-medium">
                    You will emit total of{" "}
                    <span className="text-primary font-semibold">50CO2</span>{" "}
                    during the event
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OnSite Vs Online */}
      <section className="mt-16 space">
        <div className="container mx-auto px-2 md:px-0">
          <h1 className="text-2xl w-full text-center font-bold space-y-3 mb-5 text-dark">
            Onsite vs Online
          </h1>
          <div className="space-y-5 w-full p-6 shadow-md rounded-xl">
            <h3 className="text-md text-dark text-center text-medium">
              Total <span className="text-[#ff0000] font-semibold">609</span>{" "}
              users will emit
              <span className="text-primary font-semibold"> 50CO2 </span>during
              the event
            </h3>
            <div className="w-full h-full">
            <Bar data={barData} />;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Event;
