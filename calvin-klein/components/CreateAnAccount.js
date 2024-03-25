import React from 'react';

export default function CreateAnAccount() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-4/5 lg:w-[30%] h-full flex justify-around items-start flex-col">
        <p className="text-black text-4xl font-medium">Create an Account</p>
        <img
          src="https://i.ibb.co/D5Dt3bX/Screenshot-2024-03-25-at-8-16-44-AM.png"
          className="w-full h-auto"
        ></img>
        <input
          className="w-full h-14 border border-black text-black"
          type="text"
          placeholder="    First Name*"
        ></input>
        <input
          className="w-full h-14 border border-black text-black"
          type="text"
          placeholder="    Last Name*"
        ></input>
        <input
          className="w-full h-14 border border-black text-black"
          type="text"
          placeholder="    Email*"
        ></input>{' '}
        <input
          className="w-full h-14 border border-black text-black"
          type="text"
          placeholder="    Create Password*"
        ></input>
        <div className="w-full flex">
          <div className="w-[10%] ">
            {' '}
            <input type="checkbox" className="w-[80%] h-auto" />
          </div>
          <p className="w-[90%] text-xs text-justify  ">
            When this box is checked, I agree to the Terms and Conditions and to
            receive updates on the latest products and promotions via email or
            other channels. See Privacy Policy, which includes our Notice of
            Financial Incentive, for more information.
          </p>
        </div>
        <div className="w-full h-14 bg-black text-white flex justify-center items-center">
          Create Account
        </div>
      </div>
    </div>
  );
}
