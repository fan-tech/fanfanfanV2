import React from 'react';
import {marked } from 'marked';

export const DailyCategory = (category) => {
  return (
    <div className="category-content">
      <h1 className="category-date">{category.date}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: `${marked(`${category.content}`)}` }}
      ></div>
    </div>
  );
};
