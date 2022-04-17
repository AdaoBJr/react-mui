import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import CreateAccount from './components/CreateAccount';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
