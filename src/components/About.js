import React, { useState, useEffect } from "react";
import Logo from "../assets/DumbMerch.png";
import Login from "../components/Login";
import Register from "../components/Register";

const About = () => {
  const [login, isLogin] = useState(false);
  const userlogin = () => {
    isLogin(true);
    console.log(login);
  };

  const userRegister = () => {
    isLogin(false);
  };

  return (
    <div name="about" className="w-full h-screen bg-[#020202] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-left">
            <img
              className="pb-10"
              src={Logo}
              alt="Logo Image"
              style={{ width: "200px" }}
            />
            <p className="text-4xl font-bold">Easy, Fast and Realible.</p>
            <p className="font-light text-zinc-500 pt-5">
              Go shopping for merchandise, just go to dumb merch shopping. the
              biggest merchandise in Indonesia.
            </p>
            <div className="flex pt-10 space-x-10">
              <button
                className="text-white font-bold group px-10 py-1 my-2 flex items-center bg-red-500 hover:bg-red-600 rounded-md"
                type="button"
                onClick={userlogin}
              >
                Login
              </button>
              <button
                className="text-white font-bold group px-10 py-1 my-2 flex items-center hover:bg-red-500 rounded-md hover:border-pink-600"
                type="button"
                onClick={userRegister}
              >
                Register
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-20">
            <div className="w-full max-w-xs">
              {login ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// <div name="about" className="w-full h-screen bg-[#000000ef] text-white">
//         <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />

//         <p className="text-4xl font-bold inline"></p>
