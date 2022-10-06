import React from 'react';
import top_icon from './images/TopPage/top.png';

import './Profile.css'

import profile_icon from './images/TopPage/profile.png';
import fan_icon from './images/Profile/fan_icon.jpg';
import janken from './images/Profile/janken.jpg';
import suujiawase from './images/Profile/suujiawase.jpg'
import warikan from './images/Profile/warikan.jpg';
import movie from './images/Profile/movie.jpg';
import noImg from './images/Profile/noImg.png';
import bot from './images/Profile/bot.jpg';

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="my-pfof">
        <h1>
          <img src={profile_icon} alt="{profile}" className="img" />
        </h1>

        <h2>
          <img src={fan_icon} alt="{fan}" className="fan-icon" />
        </h2>
        <p>名前：ふぁん</p>
        <p>生年月日：1989年6月1日</p>
        <p>住んでいる場所：東京都</p>
        <p>スキ：音楽、写真撮影、動画編集、プログラミングなど</p>
        <p>特技：声楽</p>
        <p>
          GitHub:<a target="blank" href="https://github.com/fan-tech">各種ソースコードはここから！</a>
        </p>
        <p className="last-p">Twitter：@fan_tech_</p>
      </div>

      <div className="my-done">
        <h1>[いままでやってきたこと]</h1>
        <div className="div-margin">
          <h2>- じゃんけんゲーム -</h2>
          <img src={janken} alt="{janken}" className="img" />
          <p>
            じゃんけんゲーム はじめてプログラミングして完成したモノ。
            NPC、なぜか強い。
          </p>
          <a
            target="_blank"
            href="https://fans-jankengame.netlify.app/"
            className="btn btn--orange btn--radius"
          >
            ここからあそべます
          </a>
        </div>
        <div className="div-margin">
          <h2>- 数字合わせゲーム -</h2>
          <img src={suujiawase} alt="{suujiawase}" className="img" />
          <p>
            次に作ってみたモノ。 自分との戦い。お手つき0でHARDを攻略してみよう!
          </p>
          <a
            target="_blank"
            href="https://fan-s-sinkeisuijaku.netlify.app/"
            className="btn btn--orange btn--radius"
          >
            ここからあそべます
          </a>
        </div>
        <div className="div-margin">
          <h2>- ワリカン！ -</h2>
          <img src={warikan} alt="{warikan}" className="img" />
          <p>
            次に作ってみたモノ。 自分との戦い。お手つき0でHARDを攻略してみよう!
          </p>
          <a
            target="_blank"
            href="https://warikan-app.netlify.app/"
            className="btn btn--orange btn--radius"
          >
            ここからあそべます
          </a>
        </div>
        <h2>- Discord bot 各種 -</h2>
        <img src={bot} alt="{bot}" className="img" />
        <p>
          読み上げbotやばんめしサジェストbotを制作。音が出ます!リンク先はTwitterです。
        </p>
        <p className="p-margin">
          <a
            target="_blank"
            href="https://twitter.com/fan_tech_/status/1491266397028384769?s=20&amp;t=gjXy2lVsOO_paOWTHYqTew"
            className="btn btn--orange btn--radius"
          >
            よみあげbot
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://twitter.com/fan_tech_/status/1491266584291442689?s=20&amp;t=jkdHwaM7RTolvk8NDdFcqQ"
            className="btn btn--orange btn--radius"
          >
            ばんめしbot
          </a>
        </p>
      </div>
      <div className="div-margin">
        <h2>- FanFanFan -</h2>
        <img src={noImg} alt="{noImg}" className="img" />
        <p>
          ポートフォリオサイトその1。HTML/CSS/JavaScriptで作ったような、作ってないような。
        </p>
        <a
          target="_blank"
          href="https://fanswebsite.netlify.app/"
          className="btn btn--orange btn--radius"
        >
          ここから見れます
        </a>
      </div>
      <div className="div-margin">
        <h2>- じゃんけんゲームNEO -</h2>
        <img src={janken} alt="{janken}" className="img" />
        <p>
          ひとまず11月まで公開中。乱数出したりなんなりをDjangoを使ってやってみた。
          <br />
          見た目は一緒、でも中身は違う。
        </p>
        <a
          target="_blank"
          href="https://jankenneo.herokuapp.com/janken"
          className="btn btn--orange btn--radius"
        >
          ここからあそべます
        </a>
      </div>
      <div className="div-margin">
        <h2>- FanFanFan V2 -</h2>
        <img src={noImg} alt="{noImg}" className="img" />
        <p>これ</p>
      <p>バックエンドはDjango,フロントエンドはReactで出来てます。</p>
      </div>
      <div className="div-margin">
        <h2>- わがやの技術書検索くん -</h2>
        <img src={noImg} alt="{noImg}" className="img" />
        <p>Djangoで作った我が家の技術書を検索できるwebアプリ</p>
      </div>
      <div className="div-margin">
        <h2>- 動画各種 -</h2>
        <img src={movie} alt="{movie}" className="img" />
        <p>
          趣味の動画制作。 自分の制作したモノを紹介したりしている。
          動画での紹介（リンク先はtwitter <br />
          音が出ます!
        </p>
        <p className="p-margin">
          <a
            target="_blank"
            href="https://twitter.com/fan_tech_/status/1491266884276490242?s=20&amp;t=t_Q0DESpXpwqfmf5FB3roA"
            className="btn btn--orange btn--radius"
          >
            餃子
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://twitter.com/fan_tech_/status/1491267100362817539?s=20&amp;t=Etyfx2R7hhC0FIi2YX0ung"
            className="btn btn--orange btn--radius"
          >
            散歩
          </a>
        </p>
      </div>
    </div>
  );
};
