import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import comment from './../../components/sections/Comments/index';

const Comments = () => {
  return (
    <div>
        <HomeHeader />
        <comment.CommentsSection />
    </div>
  )
}

export default Comments