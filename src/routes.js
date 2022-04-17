import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './lib/components/Home';
import CreateAccount from './lib/components/CreateAccount';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
