import React from 'react';
import demo from '../images/demo.jpg';
import { Link } from 'react-router-dom';
import Search from '../Component/Search';

const RecentlyAdded = () => {
  return (
    <>
      <Search />
      <section className="max-w-[1280px] px-5 mx-auto mt-10">
        <h2 className="text-purple-900 text-4xl font-semibold my-6 mb-10 text-center">
          <Link to='/recentlyadded'>Recently Added</Link>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 gap-5">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-cardbg p-10 max-w-[363px] bg-gray-100 border-purple-800 border-[2px] rounded-md">
              <img src={demo} alt="demo" className="w-140 h-190" />
              <div className="pt-5">
                <span className="text-sm capitalize font-normal text-blue-700">DC Comics</span>
              </div>
              <p className="capitalize text-black pt-4 text-md font-bold">DC Comics</p>
              <p className="text-sm capitalize text-black font-bold pt-4">(Rs 9,600.00)</p>
              <Link to='/product'>
                <button className="mt-4 bg-purple-700 hover:bg-white rounded w-100 h-8 w-full text-white text-sm font-normal hover:text-black">
                  Add To Cart
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecentlyAdded;
