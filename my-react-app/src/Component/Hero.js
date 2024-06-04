import React from 'react';
import { Link } from 'react-router-dom';
import classic from '../images/classic.jpg';
import children from '../images/Children.jpg';
import fiction from '../images/fiction.jpg';
import urdu from '../images/Urdu.jpg';
import comics from '../images/comics-novels.jpg';
import educational from '../images/Educational-Toys.jpg';

const Hero = (props) => {
  return (
    <section className="max-w-[1280px] px-5 mx-auto">
      <h2 className="text-center text-purple-900 text-4xl font-semibold font-Poppins py-[30px]">{props.name}</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 lg:gap-5 xxs:gap-2 place-items-center">
        <div className="relative max-w-[400px]">
          <img src={classic} alt="classic" className="w-[400px]" />
          <Link to="/classic"><div className="bg-purple-700 hover:bg-purple-900 absolute bottom-0 h-10 w-full cursor-pointer">
            <h3 className="text-end mr-2 md:mt-[5px] xxs:mt-[8px] lg:text-2xl md:text-xl xxs:text-base font-normal font-Poppins text-white">
              Primary&Secondary
            </h3>
          </div></Link>
        </div>
        <div className="relative max-w-[400px]">
          <img src={children} alt="children" className="w-[400px]" />
          <Link to="/children"><div className="bg-purple-700 hover:bg-purple-900 absolute bottom-0 h-10 w-full cursor-pointer">
            <h3 className="text-end mr-2 md:mt-[5px] xxs:mt-[8px] lg:text-2xl md:text-xl xxs:text-base font-normal font-Poppins text-white">
              Matric
            </h3>
          </div></Link>
        </div>
        <div className="relative max-w-[400px]">
          <img src={fiction} alt="fiction" className="w-[400px]" />
          <Link to="/fiction"><div className="bg-purple-700 hover:bg-purple-900 absolute bottom-0 h-10 w-full cursor-pointer">
            <h3 className="text-end mr-2 md:mt-[5px] xxs:mt-[8px] lg:text-2xl md:text-xl xxs:text-base font-medium font-Poppins text-white">
              Intermediate
            </h3>
          </div></Link>
        </div>
        <div className="relative max-w-[400px]">
          <img src={urdu} alt="urdu" className="w-[400px]" />
          <Link to="/urdu"><div className="bg-purple-700 hover:bg-purple-900 absolute bottom-0 h-10 w-full cursor-pointer">
            <h3 className="text-end mr-2 md:mt-[5px] xxs:mt-[8px] lg:text-2xl md:text-xl xxs:text-base font-medium font-Poppins text-white">
             Graduation
            </h3>
          </div></Link>
        </div>
        <div className="relative max-w-[400px]">
          <img src={comics} alt="comics" className="w-[400px]" />
          <Link to="/comics"><div className="bg-purple-700 hover:bg-purple-900 absolute bottom-0 h-10 w-full cursor-pointer">
            <h3 className="text-end mr-2 md:mt-[5px] xxs:mt-[8px] lg:text-2xl md:text-xl xxs:text-base font-medium font-Poppins text-white">
             Mphil
            </h3>
          </div></Link>
        </div>
        <div className="relative max-w-[400px]">
          <img src={educational} alt="educational" className="w-[400px]" />
          <Link to="/educational"><div className="bg-purple-700 hover:bg-purple-900 absolute bottom-0 h-10 w-full cursor-pointer">
            <h3 className="text-end mr-2 md:mt-[5px] xxs:mt-[8px] lg:text-2xl md:text-xl xxs:text-base font-medium font-Poppins text-white">
              Phd
            </h3>
          </div></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
