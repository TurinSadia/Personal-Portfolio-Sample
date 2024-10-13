import React from "react";
import Button from "./Button";

const GetInTouch = () => {
  return (
    <div className="container pb-10 ">
      <div className="paragraph-text py-5 text-center">
        <h2 className="font-bold text-3xl py-2">Lets Design Together</h2>
        <p className="py-6 text-justify md:text-center max-w-md md:max-w-lg mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          amet sed massa nibh lectus netus in. Aliquet donec morbi convallis
          pretium.
        </p>
      </div>

      <form className="py-2 max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start  gap-3 sm:gap-2 rounded-lg">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-solid rounded-lg border-lightGray outline-none bg-gray placeholder-lightGray text-deepGray"
          />
          <div className="w-full sm:w-auto font-normal capitalize">
            <Button text="CONTACT ME" size="large" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
