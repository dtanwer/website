import React from 'react'
import './index.css'
import Card1 from '../card1'
import Card2 from '../card2'
import Card3 from '../card3'
import Foorter from '../footer'
function ImageContent() {
  return (
    <div className='imgContent'>
      <div><Card1/></div>
      <div><Card2/></div>
      <div><Card3/></div>
      <Foorter/>
    </div>
  )
}

export default ImageContent