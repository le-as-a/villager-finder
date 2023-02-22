import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import InfoPage from './components/InfoPage';
import Catalog from './components/Catalog';
import { getNames } from './store/NamesSlice';

function App() {
  const dispatch = useDispatch();
  const names = useSelector(state => state.names);

  useEffect(() => {
    (async () => {
      dispatch(getNames());
    })();
  }, [dispatch])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main names={names} />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:id' element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
