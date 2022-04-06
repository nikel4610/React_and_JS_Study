import React, { useState } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Landing from './pages/landing';
import GlobalInsight from './pages/globalInsight';
import Solutions from './pages/solutions';
import ScrollToTop from './static/component/ScrollToTop';
import Header from './static/component/Header';
import Footer from './static/component/Footer';
import Menu from './static/component/Menu';
import { solutionsData } from './static/data';
import ItemsList from './pages/solutions/component/itemsList';


const App = () => {
  const [menu, setMenu] = useState(1);

  return (
    <div className="App">
        <ScrollToTop />
        <Header setMenu={setMenu} />
        <Route path='/menu' exact render={() => <Menu />} />
        <Route path='/' exact render={() => <Landing />} />
        <Route path='/global' exact render={() => <GlobalInsight />} />
        <Route path='/solutions' exact render={() => <Solutions />} />

        {solutionsData.map((s, i) =>
          <Route
            key={i} path={`/solutions${s.contents.link}`} 
            render={() => <ItemsList contents={s.contents} />}
          />)}
    </div>
  );
}

export default withRouter(App);

