import React from "react";

function Register() {
  return (
    <div className="flex flex-col w-full h-screen ">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-6/12 2xl:w-6/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Register{" "}
          </h2>
          <form className="mt-10" method="POST">
            <label
              htmlFor="firstname"
              className="flex justify-start text-xs font-semibold text-gray-600 uppercase"
            >
              FirstName
            </label>
            <input
              id="email"
              type="name"
              name="name"
              placeholder="rose"
              autoComplete="rose"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />
            <label
              htmlFor="firstname"
              className="flex justify-start text-xs font-semibold text-gray-600 uppercase"
            >
              LastName
            </label>
            <input
              id="name"
              type="name"
              name="name"
              placeholder="nyaugenya"
              autoComplete="rose"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />
            <label
              htmlFor="email"
              className="flex justify-start text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label
              htmlFor="phone_number"
              className="flex justify-start text-xs font-semibold text-gray-600 uppercase"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="phone_number"
              autoComplete="phone"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <label
              htmlFor="password"
              className="flex justify-start mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />

            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Register{" "}
            </button>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="/login" className="flex-2 underline">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
