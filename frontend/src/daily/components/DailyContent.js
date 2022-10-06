import React from 'react';
import { Link } from 'react-router-dom'

import img1 from '../../images/daily/fan_perfect.png'
import img2 from '../../images/daily/fan_good.png'
import img3 from '../../images/daily/fan_soso.png'
import img4 from '../../images/daily/fan_bad.png'

import '../Daily.css';

export const DailyContent = (daily) => {
  let eva;
  if (daily.evaluation === 'perfect') {
    eva = img1
  } else if (daily.evaluation === 'good') {
    eva = img2
  } else if (daily.evaluation === 'soso') {
    eva = img3
  } else {
    eva = img4
  }

  return (
    <div className='evaluation'>
      <Link to={`/daily/${daily.id}`}> <h1 className='eva-h1'> {daily.date} </h1> </Link>
      <img src ={eva} alt='{eva}' className='eva-img'/>
  </div >
  )
}
