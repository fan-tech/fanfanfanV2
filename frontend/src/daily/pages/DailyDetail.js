import React ,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDailyDetail } from '../api/getDaily';
import { marked } from 'marked';
import { CategoryList } from '../components/CategoryList';

export const DailyDetail = () => {
  const initialState = {
    date: '',
    done: '',
    wanna_do: '',
    other: '',
    summary: '',
  };
    const [detail, setDetail] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
      getDailyDetail(id)
        .then((d) => {
          setDetail(d);
          setLoading(false);
        })
        .catch((e) => {
          throw new Error(e);
        });
    }, [])

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{detail.date}</h1>
          <h1>今日したこと</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${marked(`${detail.done}`)}`,
            }}
            className="detail-content"
          ></div>
          <h1>これからしたいこと</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${marked(`${detail.wanna_do}`)}`,
            }}
            className="detail-content"
          ></div>
          <h1>その他</h1>
          <div
            dangerouslySetInnerHTML={{ __html: `${marked(`${detail.other}`)}` }}
            className="detail-content"
          ></div>
          <h1>1日のまとめ</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${marked(`${detail.summary}`)}`,
            }}
            className="detail-content"
          ></div>
        </div>
      )}
      <CategoryList />
    </div>
  );
};
