import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import InfoPage from './components/InfoPage';
import Catalog from './components/Catalog';
import { getNames } from './store/NamesSlice';
import { getCatalog } from './store/catalogSlice';
import Default from './components/Default';
import Login from './components/Login';
import Inventory from './components/Inventory';

function App() {
  const dispatch = useDispatch();
  const names = useSelector(state => state.names);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      dispatch(getNames());
      dispatch(getCatalog());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) return;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main names={names} />} />
        <Route path='/catalog' element={<Catalog />} loader={dispatch(getCatalog())} />
        <Route path='/catalog/:id' element={<InfoPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
