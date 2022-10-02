import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCategory } from '../api/getDaily';
import { DailyCategory } from '../components/DailyCategory';
import { CategoryList } from '../components/CategoryList';



export const CategoryView = () => {
  const initialState = {
    date: '',
  };

  const [category, setCategory] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    getCategory(cat)
      .then((c) => {
        setCategory(c);
        setLoading(false);
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, [cat]);

  let title;

    if (cat === 'done') {
      title = '今日したこと';
    } else if (cat === 'wanna_do') {
      title = 'これからしたいこと';
    } else if (cat === 'other') {
      title = 'その他';
    } else {
      title = '1日のまとめ';
    }
  return (
    <div className="main">
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="categoryView-container">
          <h1 className="category-title">{title}</h1>
          {category.map((c,index) => (
            <DailyCategory date={c.date} content={c.content} key={index} />
          ))}
        </div>
      )}
      <CategoryList />
    </div>
  );
};
