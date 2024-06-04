import React, { useState } from 'react';
import demo from '../images/demo.jpg';
import { GiLaurelCrown } from 'react-icons/gi';

const Checkout = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
  };

  

  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-8">
      {!orderConfirmed ? (
        <>
          {/* Product Details */}
          <div className="max-w-md mx-4 md:mx-0 my-8">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>

            {/* Book 1 */}
            <div className="flex mb-4">
              <img src={demo} alt="Book 1" className="w-20 h-auto mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Book Title 1</h3>
                <p className="text-sm text-gray-700">Author Name 1</p>
                <p className="text-sm text-gray-700">$19.99</p>
              </div>
              <button onClick={() => console.log("Remove Book 1")} className="ml-2 text-red-500 hover:text-red-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Book 2 */}
            <div className="flex mb-4">
              <img src={demo} alt="Book 2" className="w-20 h-auto mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Book Title 2</h3>
                <p className="text-sm text-gray-700">Author Name 2</p>
                <p className="text-sm text-gray-700">$24.99</p>
              </div>
              <button onClick={() => console.log("Remove Book 2")} className="ml-2 text-red-500 hover:text-red-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="max-w-md mx-4 md:mx-0 my-8">
            <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>

            {/* Subtotal */}
            <div className="flex justify-between mb-4">
              <p>Subtotal:</p>
              <p>$44.98</p>
            </div>

            {/* Shipping Details */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
              <input type="text" placeholder="Name" className="w-full border border-gray-300 p-2 mb-2" />
              <input type="text" placeholder="Address" className="w-full border border-gray-300 p-2 mb-2" />
              <input type="text" placeholder="Phone no" className="w-full border border-gray-300 p-2 mb-2" />
              <input type="text" placeholder="Zip Code" className="w-full border border-gray-300 p-2 mb-2" />
              <input type="text" placeholder="Country" className="w-full border border-gray-300 p-2 mb-2" />
            </div>

            {/* Total */}
            <div className="flex justify-between mb-4">
              <p>Total:</p>
              <p>$44.98</p>
            </div>

            {/* Checkout Button */}
            <button onClick={handleConfirmOrder} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded w-full">Confirm Order</button>
          </div>
        </>
      ) : (
        <div className="max-w-md mx-auto my-8 mb-[300px]">
          <h2 className="text-2xl font-semibold mb-4">Order Completed</h2>
          <p className="text-lg text-green-600">Your order is complete! Thank you for shopping with us.</p>
          <GiLaurelCrown className="text-yellow-500 h-10 w-12 mx-auto mb-4" />
          
        </div>
      )}
    </div>
  );
};

export default Checkout;
