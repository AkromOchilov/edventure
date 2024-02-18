import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import home from './../../components/sections/Home/index';

const Home = () => {
  return (
    <div>
        <HomeHeader />
        <home.HomeSection />
    </div>
  )
}

export default Home