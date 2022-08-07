import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../api/useFetch";
import AuthContext from "../../store/auth-context";



const FiterNav = {
  created: "Events Created",
  joined: "Events Joined",
};

function Profile() {
  const ctx = useContext(AuthContext)
  
  const [activeCategory, setActiveCategory] = useState('joined')

  const { fetchEvent, eventError, isEventPending } = useFetch(`https://co2-calculator-sahajrajmalla.herokuapp.com/fetch_event?user_id=${ctx.userId}`);
  const { fetchParticipants, participantError, isParticipantPending } = useFetch(`https://co2-calculator-sahajrajmalla.herokuapp.com/fetch_participants?user_id=${ctx.userId}`);

  

  console.log("fetchParticipants", fetchParticipants);
  console.log(participantError)
  console.log(isParticipantPending)

  console.log("fetchEvent", fetchEvent);
  console.log(eventError)
  console.log(isEventPending)
  const [activeFilter, setActiveFilter] = useState(FiterNav.created);

  const activeChangeHandler = (item) => {
    setActiveFilter(item);
  };

  const items = Object.values(FiterNav).map((item, index) => (
    <h1
      key={index}
      onClick={() => activeChangeHandler(item)}
      className={`pb-2 w-1/2 ${
        item === activeFilter && "text-primary border-b border-primary"
      }  cursor-pointer `}
    >
      {item}
    </h1>
  ));

  return (
    <section className="mt-16">
      <div className="container flex flex-wrap-reverse md:flex-nowrap gap-y-20 mx-auto px-2 md:px-0 md:gap-y-0 md:space-x-10">
        <div className="w-full md:w-1/3 space-y-10">
          {/* UserInfo */}
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-dark">{ctx.name}</h2>
            </div>
            <button className="text-sm font-semibold  text-dark rounded-lg bg-gray-100 px-6 py-2 h-min">
              Edit
            </button>
          </div>

          {/* Details */}
          <div className="flex flex-col shadow p-4 space-y-5 rounded-lg">
            <div className="text-dark text-sm space-y-1">
              <h4 className="font-semibold">Email</h4>
              <p className="font-bold">{ctx.email}</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-dark text-sm space-y-1">
                <h4 className="font-semibold">Password</h4>
                <p className="font-bold">*********</p>
              </div>
              <button className="text-sm font-semibold  text-white rounded-lg bg-primary px-4 py-2 h-min">
                Change
              </button>
            </div>
          </div>

          {/* Delete */}
          <div className="flex flex-col shadow p-4 space-y-5 rounded-lg">
            <div className="text-dark text-sm space-y-1">
              <h4 className="text-lg font-bold">Delete Your Account</h4>
              <p className="text-xs">
                Deleting your account is permanent. Once deleted, no any
                information can be retrieved.
              </p>
            </div>

            <button className="text-sm font-semibold w-min text-[#FF0000] rounded-lg bg-[#FFEEEE] px-4 py-2 h-min">
              Delete
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-10">
          <div className="flex text-lg font-semibold text-center">{items}</div>

          <div className="w-full flex flex-col space-y-10">
            {/* Event 1 */}
            <div className="flex w-full flex-col space-y-5 justify-between md:justify-start sm:flex-row mx-auto sm:space-y-0 md:space-x-10 ">
              {/* <!--  Image --> */}
              <div className="w-full sm:w-1/3">
                <div className="relative w-full h-[150px]">
                  <img
                    className="mb-10 z-1 w-full h-full  object-cover rounded-2xl md:mb-0"
                    src="https://auraed.org/assets/images/about.webp"
                    alt="story"
                  />
                  <div className="cursor-pointer absolute bottom-2 right-2 bg-white rounded-full p-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4504 6.8H19.5504C19.5504 6.1237 19.2817 5.47509 18.8035 4.99688C18.3253 4.51866 17.6767 4.25 17.0004 4.25C16.3241 4.25 15.6755 4.51866 15.1973 4.99688C14.7191 5.47509 14.4504 6.1237 14.4504 6.8V6.8ZM12.7504 6.8C12.7504 5.67283 13.1982 4.59182 13.9952 3.7948C14.7922 2.99777 15.8732 2.55 17.0004 2.55C18.1276 2.55 19.2086 2.99777 20.0056 3.7948C20.8026 4.59182 21.2504 5.67283 21.2504 6.8H29.7504C29.9758 6.8 30.192 6.88955 30.3514 7.04896C30.5108 7.20836 30.6004 7.42457 30.6004 7.65C30.6004 7.87543 30.5108 8.09163 30.3514 8.25104C30.192 8.41045 29.9758 8.5 29.7504 8.5H27.9586L25.9288 26.0848C25.7853 27.3278 25.1899 28.4747 24.2558 29.3073C23.3216 30.1398 22.1141 30.5999 20.8628 30.6H13.138C11.8867 30.5999 10.6791 30.1398 9.74502 29.3073C8.81091 28.4747 8.21547 27.3278 8.07199 26.0848L6.04219 8.5H4.25039C4.02496 8.5 3.80876 8.41045 3.64935 8.25104C3.48994 8.09163 3.40039 7.87543 3.40039 7.65C3.40039 7.42457 3.48994 7.20836 3.64935 7.04896C3.80876 6.88955 4.02496 6.8 4.25039 6.8H12.7504ZM9.76009 25.891C9.85601 26.7196 10.2532 27.484 10.876 28.0388C11.4988 28.5936 12.3039 28.9001 13.138 28.9H20.8628C21.6969 28.9001 22.5019 28.5936 23.1248 28.0388C23.7476 27.484 24.1448 26.7196 24.2407 25.891L26.2467 8.5H7.75409L9.76009 25.891ZM14.4504 12.75C14.6758 12.75 14.892 12.8396 15.0514 12.999C15.2108 13.1584 15.3004 13.3746 15.3004 13.6V23.8C15.3004 24.0254 15.2108 24.2416 15.0514 24.401C14.892 24.5604 14.6758 24.65 14.4504 24.65C14.225 24.65 14.0088 24.5604 13.8493 24.401C13.6899 24.2416 13.6004 24.0254 13.6004 23.8V13.6C13.6004 13.3746 13.6899 13.1584 13.8493 12.999C14.0088 12.8396 14.225 12.75 14.4504 12.75ZM20.4004 13.6C20.4004 13.3746 20.3108 13.1584 20.1514 12.999C19.992 12.8396 19.7758 12.75 19.5504 12.75C19.325 12.75 19.1088 12.8396 18.9493 12.999C18.7899 13.1584 18.7004 13.3746 18.7004 13.6V23.8C18.7004 24.0254 18.7899 24.2416 18.9493 24.401C19.1088 24.5604 19.325 24.65 19.5504 24.65C19.7758 24.65 19.992 24.5604 20.1514 24.401C20.3108 24.2416 20.4004 24.0254 20.4004 23.8V13.6Z"
                        fill="#FF0000"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Content --> */}
              <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
                <h2 className="text-xl font-bold text-dark">
                  Open Session On Blockchain
                </h2>

                <div className="flex w-full justify-between space-x-2">
                  <Link
                    to="/"
                    className="p-2 w-1/3 text-sm lg:text-xl text-center self-center font-bold text-white bg-primaryDark rounded-xl"
                  >
                    View
                    <br />
                    Details
                  </Link>
                  <div className="p-2 w-1/3 text-sm text-center text-[#0400C8] bg-[#F3F2FF] rounded-xl">
                    <span className="text-md lg:text-xl font-bold">69</span>
                    <br />
                    People Joined
                  </div>
                  <div className="p-2 w-1/3 text-sm text-center text-[#FF0000] bg-[#FFEEEE] rounded-xl">
                    <span className="text-md lg:text-xl font-bold">250 kg</span>
                    <br />
                    Co2 Calculated
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex w-full flex-col space-y-5 justify-between md:justify-start sm:flex-row mx-auto sm:space-y-0 md:space-x-10 ">
              {/* <!--  Image --> */}
              <div className="w-full sm:w-1/3">
                <div className="relative w-full h-[150px]">
                  <img
                    className="mb-10 z-1 w-full h-full  object-cover rounded-2xl md:mb-0"
                    src="https://auraed.org/assets/images/about.webp"
                    alt="story"
                  />
                  <div className="cursor-pointer absolute bottom-2 right-2 bg-white rounded-full p-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4504 6.8H19.5504C19.5504 6.1237 19.2817 5.47509 18.8035 4.99688C18.3253 4.51866 17.6767 4.25 17.0004 4.25C16.3241 4.25 15.6755 4.51866 15.1973 4.99688C14.7191 5.47509 14.4504 6.1237 14.4504 6.8V6.8ZM12.7504 6.8C12.7504 5.67283 13.1982 4.59182 13.9952 3.7948C14.7922 2.99777 15.8732 2.55 17.0004 2.55C18.1276 2.55 19.2086 2.99777 20.0056 3.7948C20.8026 4.59182 21.2504 5.67283 21.2504 6.8H29.7504C29.9758 6.8 30.192 6.88955 30.3514 7.04896C30.5108 7.20836 30.6004 7.42457 30.6004 7.65C30.6004 7.87543 30.5108 8.09163 30.3514 8.25104C30.192 8.41045 29.9758 8.5 29.7504 8.5H27.9586L25.9288 26.0848C25.7853 27.3278 25.1899 28.4747 24.2558 29.3073C23.3216 30.1398 22.1141 30.5999 20.8628 30.6H13.138C11.8867 30.5999 10.6791 30.1398 9.74502 29.3073C8.81091 28.4747 8.21547 27.3278 8.07199 26.0848L6.04219 8.5H4.25039C4.02496 8.5 3.80876 8.41045 3.64935 8.25104C3.48994 8.09163 3.40039 7.87543 3.40039 7.65C3.40039 7.42457 3.48994 7.20836 3.64935 7.04896C3.80876 6.88955 4.02496 6.8 4.25039 6.8H12.7504ZM9.76009 25.891C9.85601 26.7196 10.2532 27.484 10.876 28.0388C11.4988 28.5936 12.3039 28.9001 13.138 28.9H20.8628C21.6969 28.9001 22.5019 28.5936 23.1248 28.0388C23.7476 27.484 24.1448 26.7196 24.2407 25.891L26.2467 8.5H7.75409L9.76009 25.891ZM14.4504 12.75C14.6758 12.75 14.892 12.8396 15.0514 12.999C15.2108 13.1584 15.3004 13.3746 15.3004 13.6V23.8C15.3004 24.0254 15.2108 24.2416 15.0514 24.401C14.892 24.5604 14.6758 24.65 14.4504 24.65C14.225 24.65 14.0088 24.5604 13.8493 24.401C13.6899 24.2416 13.6004 24.0254 13.6004 23.8V13.6C13.6004 13.3746 13.6899 13.1584 13.8493 12.999C14.0088 12.8396 14.225 12.75 14.4504 12.75ZM20.4004 13.6C20.4004 13.3746 20.3108 13.1584 20.1514 12.999C19.992 12.8396 19.7758 12.75 19.5504 12.75C19.325 12.75 19.1088 12.8396 18.9493 12.999C18.7899 13.1584 18.7004 13.3746 18.7004 13.6V23.8C18.7004 24.0254 18.7899 24.2416 18.9493 24.401C19.1088 24.5604 19.325 24.65 19.5504 24.65C19.7758 24.65 19.992 24.5604 20.1514 24.401C20.3108 24.2416 20.4004 24.0254 20.4004 23.8V13.6Z"
                        fill="#FF0000"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!-- Content --> */}
              <div className="flex flex-col space-y-10 items-center text-center md:w-1/2 md:text-start md:items-start">
                <h2 className="text-xl font-bold text-dark">
                  Open Session On Blockchain
                </h2>

                <div className="flex w-full justify-between space-x-2">
                  <Link
                    to="/"
                    className="p-2 w-1/3 text-sm lg:text-xl text-center self-center font-bold text-white bg-primaryDark rounded-xl"
                  >
                    View
                    <br />
                    Details
                  </Link>
                  <div className="p-2 w-1/3 text-sm text-center text-[#0400C8] bg-[#F3F2FF] rounded-xl">
                    <span className="text-md lg:text-xl font-bold">69</span>
                    <br />
                    People Joined
                  </div>
                  <div className="p-2 w-1/3 text-sm text-center text-[#FF0000] bg-[#FFEEEE] rounded-xl">
                    <span className="text-md lg:text-xl font-bold">250 kg</span>
                    <br />
                    Co2 Calculated
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
