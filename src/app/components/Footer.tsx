





'use client';

import Item4 from "./Item4";
import './App.css'

function Footer(): JSX.Element {
  return (
    <div className="bg-black foot">
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full h-auto lg:h-44">
      <div className="mb-5 lg:mb-0">
        <Item4/>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-auto h-auto lg:h-full text-white justify-evenly items-center">
        <div className="mb-3 lg:mb-0 lg:mr-5">
          Contact US
        </div>
        <div className="mb-3 lg:mb-0 lg:mr-5">
          Contact US
        </div>
        <div className="mb-3 lg:mb-0">
          hi3
        </div>
      </div>
      </div>
      </div>
  );
}

export default Footer;

