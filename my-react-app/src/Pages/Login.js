import React from 'react'

const Login = () => {
  return (
    
        <div class="max-w-[1280px] px-5 mx-auto mt-[30px] mb-[300px] bg-gray-100">  
    

    <form class="max-w-[420px]">
        <div class="mb-5 ">
          <label for="email" class="w-[200px]   text-lg font-medium text-dark-blue dark:text-white">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
        </div>
        <div class="mb-5">
            <label for="password" class="w-[200px] text-lg font-medium text-dark-blue dark:text-white">Your password</label>
            <input type="password" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
            </div>
            <label for="remember" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            <h1 className='ms-2 text-lg font-medium text-purple-500 dark:text-gray-300'>Forgot password?</h1>
          </div>
          
          <button class="bg-purple-700 hover:bg-purple-950 rounded w-[100px] mx-auto h-[35px] text-white
          text-sm font-medium">Submit</button>
      </form>
      
      
    </div>
  )
}

export default Login