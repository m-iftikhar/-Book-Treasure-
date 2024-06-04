import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { FiDelete } from 'react-icons/fi';
import logo from '../images/my-logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='max-w-[1920px] mx-auto flex justify-between items-center p-4 h-[100px] bg-purple-950'>
      <div className='flex items-center'>
        <div className='cursor-pointer text-sky-blue'>
          <HiMenu onClick={onToggle} size={30} />
        </div>
        <img src={logo} alt='' className='w-[100px] ml-10 p-3' />
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-sky-blue'>
          Book <span className='font-bold text-white'>Treasure</span>
        </h1>
      </div>

      <ul className='hidden md:flex text-white flex-row gap-8 font-bold text-xl'>
        <li className='hover:text-sky-blue'><Link to='/'>Books</Link></li>
        <li className='hover:text-sky-blue'><Link to='/recentlyadded'>Recently Added</Link></li>
        <li className='hover:text-sky-blue'><Link to='/sellbooks'>Sell Books</Link></li>
        <li className='hover:text-sky-blue'><Link to='/login'>Login</Link></li>
        <li className='hover:text-sky-blue'><Link to='/signup'>Signup</Link></li>
      </ul>

      {toggle && (
        <div className='bg-black/80 w-full h-screen fixed left-0 top-0 z-10' onClick={onToggle}></div>
      )}

      <div className={`${toggle ? 'fixed' : 'hidden'} top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300`}>
        <FiDelete size={30} onClick={onToggle} className='absolute right-4 cursor-pointer top-4' />
        <h2 className='text-2xl p-4'>Book <span className='font-bold'>Treasure</span></h2>
        <nav>
          <ul className='text-gray-800 p-4 flex flex-col'>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/'>Books</Link></li>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/recentlyadded'>Recently Added</Link></li>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/sellbooks'>Sell Books</Link></li>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/login'>Login</Link></li>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/signup'>Signup</Link></li>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/about'>About</Link></li>
            <li className='text-xl py-4 hover:text-purple-700'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
