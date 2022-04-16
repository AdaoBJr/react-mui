import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateAccount from './components/CreateAccount';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
};

export default Router;
