import React from 'react';

import top_icon from './images/TopPage/top.png';
import './Top.css';


export const Top = () => {
  return (
    <div className='top-container'>
      <img src={top_icon} alt="{top}" className='top-img'/>
    </div>
  )
}
