import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../components/main/Main';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
