import React from 'react'

const Search = () => {
  return (
    <div class="max-w-[1280px] px-5 mx-auto mt-[30px]">
  <form class="flex flex-col md:flex-row gap-3">
    <div class="flex">
        <input type="text" placeholder="Search for the book you like"
			class="w-full xl:w-[800px] lg:w-[620px] md:w-[420px] px-3 h-10 rounded-l border-2 border-dark-blue focus:outline-none
       focus:border-dark-blue"/>
        <button type="submit" class="bg-purple-700 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    </form>
    </div>
  )
}

export default Search
