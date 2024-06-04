import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    function generateCaptcha() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var length = 6;
        var captcha = "";
        for (var i = 0; i < length; i++) {
          captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        var captchaElement = document.getElementById("captcha");
        if (captchaElement) {
          captchaElement.textContent = captcha;
        }
      }
      
      // Generate CAPTCHA on page load
      document.addEventListener("DOMContentLoaded", function() {
          generateCaptcha();
      });
  return (
    <div className="max-w-[1280px] px-5 mx-auto mt-[30px] bg-gray-100">
      <form className="max-w-[620px]">
        <div className="mb-5 flex items-center">
          <label htmlFor="email" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">E-Mail Address</label>
          <input type="email" id="email" className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="password" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="confirmPassword" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Confirm Password</label>
          <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="firstName" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">First Name</label>
          <input type="text" id="firstName" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="firstName" />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="lastName" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Last Name</label>
          <input type="text" id="lastName" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="lastName" />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="address" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Address</label>
          <textarea id="address" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="city" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">City</label>
          <select id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Faisalabad</option>
            <option>Islamabad</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="phone" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Phone</label>
          <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="referenceCode" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Reference Code</label>
          <input type="text" id="referenceCode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        {/* CAPTCHA */}
        <div className="flex items-center mb-5">
          <span id="captcha" className="text-lg border border-gray-300 rounded-lg px-4 py-2 mr-2 ml-40  max-w-[310px] w-[150px] h-12"></span>
          <button type="button" id="refreshCaptcha" onClick={() => generateCaptcha()} className="bg-purple-500 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded max-w-[310px] w-full">Refresh</button>
        </div>
        <div className="mb-5 flex items-center">
          <label htmlFor="userCaptcha" className="w-[200px] text-base font-medium text-dark-blue dark:text-white">Captcha</label>
          <input type="text" id="userCaptcha" placeholder="Enter CAPTCHA" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        {/* CAPTCHA */}
        <div className="max-w-[200px] mx-auto">
          <button className="bg-purple-500 hover:bg-purple-950 rounded w-[100px] mx-auto h-[35px] text-white text-sm font-medium">Register</button>
          
        </div>
        <h1 className=' ms-2 text-center text-lg font-medium text-gray-500 mt-4'>Already have an account? <span className='text-purple-700 hover:text-purple-950 ml-4'><Link to='/login'> Login here</Link> </span></h1>
      </form>
    </div>
  );
}

export default Signup;
