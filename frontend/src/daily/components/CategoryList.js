import React from 'react';
import { Link } from 'react-router-dom';
import '../Daily.css';

export const CategoryList = () => {
  return (
    <div className='category-container'>
      <ul className='category-ul'>
        <li className='catrgory-li'>
          <Link to="/daily/category/done">今日したこと</Link>
        </li>
        <li className='catrgory-li'>
          <Link to="/daily/category/wanna_do">これからすること</Link>
        </li>
        <li className='catrgory-li'>
          <Link to="/daily/category/other">その他</Link>
        </li>
        <li className='catrgory-li'>
          <Link to="/daily/category/summary">1日のまとめ</Link>
        </li>
      </ul>
    </div>
  );
};
