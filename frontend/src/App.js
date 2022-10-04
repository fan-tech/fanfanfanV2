import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { DailyTop } from './daily/pages/DailyTop';
import { CategoryView } from './daily/pages/CategoryView';
import { DailyDetail } from './daily/pages/DailyDetail';
import { Profile } from './Profile';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <Router>
        <Helmet>
          <title>FANFANFAN</title>
          <meta name="description" content="ポートフォリオサイトです。" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
          ></meta>
        </Helmet>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/daily" element={<DailyTop />} />
            <Route path="daily/:id" element={<DailyDetail />} />
            <Route path="/daily/category/:cat" element={<CategoryView />} />
            <Route path="/profile" element={<Profile />} />
            <Route render={() => <h4>not found</h4>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
