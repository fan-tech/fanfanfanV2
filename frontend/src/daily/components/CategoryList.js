import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/daily/category/done">今日したこと</Link>
        </li>
        <li>
          <Link to="/daily/category/wanna_do">これからすること</Link>
        </li>
        <li>
          <Link to="/daily/category/other">その他</Link>
        </li>
        <li>
          <Link to="/daily/category/summary">1日のまとめ</Link>
        </li>
      </ul>
    </div>
  );
};
