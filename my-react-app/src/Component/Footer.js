import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer class="bg-purple-950  mt-20 ">
    <div class="max-w-[1480px] px-5 py-10 mx-auto">
    <div class="flex md:flex-row xxs:flex-col items-center justify-between">
      <div>
        <button class="  rounded w-[100px] h-[35px] text-white hover:text-light-blue
        text-sm font-medium mr-12">booktreasure@gmail.com</button>
        <button class="ml-5  rounded w-[100px] h-[35px] text-white hover:text-light-blue
        text-sm font-medium ">+923104628296</button>
      </div>
      <ul class="sm:space-x-6 xxs:space-x-2 sm:text-base xxs:text-xs font-Poppins font-semibold text-whitee md:mt-0 xxs:mt-[30px] hidden md:flex">
        <li  class="hover:text-sky-blue text-white"> <Link to='/' >Home </Link></li>
        <li  class="hover:text-sky-blue  text-white"> <Link to='/recentlyadded'>RecentlyAdded </Link></li>
        <li  class="hover:text-sky-blue  text-white"> <Link to='/about'>About Us </Link></li>
        <li  class="hover:text-sky-blue  text-white"> <Link to='/contact'>Contact Us </Link></li>
      </ul>
    </div>
  </div>
  </footer>
  )
}

export default Footer
