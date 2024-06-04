import React, { useRef } from 'react';
import demo from '../images/demo.jpg';
import { Link } from 'react-router-dom';
import next_icon from '../images/white-arrow.png';
import back_icon from '../images/back-icon.png';

const RecentHome = (props) => {
  const slider = useRef(null);
  let tx = 0;

  const moveForward = () => {
    if (tx > -200) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const moveBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <section className="max-w-[1280px] px-5 mx-auto mt-[100px] relative">
      <h2 className="text-purple-900 text-4xl font-semibold my-[30px] mb-[50px] text-center">{props.name}</h2>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-300" ref={slider}>
          {[...Array(12)].map((_, index) => (
            <div key={index} className="min-w-[20%] p-2 md:min-w-[25%] sm:min-w-[33.33%] xs:min-w-[50%] xxs:min-w-[100%]">
              <div className="bg-gray-100 p-2 border-2 border-purple-800 rounded-md">
                <img src={demo} alt="demo" className="w-full h-auto" />
                <div className="pt-3">
                  <a href="#" className="text-sm capitalize font-normal text-blue-700">DC Comics</a>
                </div>
                <p className="capitalize text-black pt-2 text-md font-bold">DC Comics</p>
                <p className="text-sm capitalize text-black font-bold pt-2">(Rs 9,600.00)</p>
                <Link to='/product'><button className="mt-3 bg-purple-700 hover:bg-white rounded w-full h-8 text-white  text-sm font-normal hover:text-black">
                  Add To Cart
                </button> </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-purple-700 rounded-full"
          onClick={moveBackward}
        >
          <img src={back_icon} alt="Back" className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-purple-700 rounded-full"
          onClick={moveForward}
        >
          <img src={next_icon} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default RecentHome;
