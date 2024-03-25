import React from 'react';

export default function Header() {
  return (
    <div className="w-screen h-32 bg-white flex justify-center items-center flex-col">
      <div className="w-screen h-1/3 bg-black flex justify-center items-center">
        <p className="w-5/3 text-white text-xs">
          The Spring Event: Up to 40% off SitewideWomen's Men's | Free shipping
          on $75+ Details
        </p>
      </div>
      <div className="w-screen h-2/3 bg-white flex">
        <div className="w-[40%] h-full justify-center items-center flex">
          <div className="w-[80%] h-full text-xs font-normal  justify-around items-center hidden lg:flex">
            <div>New</div>
            <div>Women</div>
            <div>Men</div>
            <div>Underwear</div>
            <div>Kids</div>
            <div>Home</div>
            <div>Essentials</div>
            <div>Sale</div>
          </div>
          <div className="flex lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="w-[20%] h-full flex justify-center items-center grow">
          <img
            src="https://www.calvinklein.us/on/demandware.static/-/Sites-PVHCKUS-Library/default/dwa55a036f/logo/Logo.svg"
            className=""
          ></img>
        </div>
        <div className="w-[40%] flex justify-center items-center">
          <div className=" h-full w-[30%] flex justify-around items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 hidden lg:flex"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
