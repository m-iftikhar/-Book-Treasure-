import React from 'react'
import Hero from '../Component/Hero'
import RecentHome from '../Component/RecentHome'
import Search from '../Component/Search'
const Books = () => {
  return (
    <div>
      <Search/>
      <Hero name='Featured Categories'/>
      <RecentHome name='Recently  Added'/>
      <RecentHome/>
      <RecentHome/>
    </div>
  )
}

export default Books
