import { Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard } from './lib/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
