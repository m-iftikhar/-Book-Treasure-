import React from 'react';
import demo from '../images/demo.jpg';
import { Link } from 'react-router-dom';
const Product = () => {
  return (
    <div className="container mx-auto px-4 py-20 justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Large Image with Specifications */}
        <div className="md:col-span-1">
          <img src={demo} alt="Large Image" className="mb-4 w-full md:w-3/4 mx-auto md:mx-0" />
          {/* Book Specifications */}
          
        </div>

        {/* Small Images */}
        <div className="md:col-span-1 ">
          <div className="grid grid-cols-4 gap-7 mr-8 mt-24">
            {[1, 2, 3, 4].map((index) => (
              <img key={index} src={demo} alt="Small Image" className="w-full h-auto" />
            ))}
          </div>
          <div className="text-center md:text-left mt-7">
            <h2 className="text-2xl font-bold mb-2">Dc Comics</h2>
            <p className="text-lg font-semibold mb-2">Rs.(9600.00)</p>
            <p className="text-base mb-4  border-2px border" >Portals to infinite worlds, crafted from the ink of imagination....</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"> <Link to='/checkout'>Check out</Link></button>
          </div>
        </div>
        
      </div>

      {/* Description and Reviews Section */}
      <div className="mt-8 bg-gray-100 p-4">
        <span className="text-3xl font-bold mb-4 border:2px border border-black p-2">Description</span>
        <p className="text-base mb-4 mt-8">Through the written word, embark on adventures vast and varied, where heroes rise, mysteries unravel, and dreams take flight, all within the comfort of a book's embrace, where every chapter offers solace, excitement, and the promise of new horizons....</p>

        <span className="text-2xl font-bold mb-4 p-2 border border:2px border-black">Reviews</span>
        
          <div className="mb-4 mt-7">
            <p className="text-base mb-2">Review 1</p>
            <p className="text-sm text-gray-500 mb-2">By John Doe</p>
            <p className="text-base mb-4">A gripping tale that kept me hooked from start to finish. Highly recommend!</p>
          

          <div>
            <p className="text-base mb-2">Review 2</p>
            <p className="text-sm text-gray-500 mb-2">By Jane Doe</p>
            <p className="text-base">Couldn't put it down! An absolute must-read for anyone who loves a good story.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
