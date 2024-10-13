import React from 'react';
import Image from "next/image";
import ProgressBar from './ProgressBar';

const AboutMe = () => {
  return (
    <div className="container py-5 px-5">
      <div className="block sm:flex">
        <div className="columns-1 m-auto">
          <div className="mb-2">
            <Image
              className="m-auto w-64 h-64 sm:w-72 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              src="/Group 7.png"
              alt="Group 7"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="columns-1 m-auto">
          <div className="py-6 text-left max-w-md mx-auto sm:mx-0 text-sm md:text-base">
            <h2 className="font-bold text-3xl py-2 text-center sm:text-left">
              About Me
            </h2>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra.
            </p>

            <div className="progress-bar text-left pt-6">
              <div>
                <ProgressBar name="UX" value={90} />
                <ProgressBar name="Website Design" value={60} />
                <ProgressBar name="App Design " value={89} />
                <ProgressBar name="Graphic Design " value={95} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe
