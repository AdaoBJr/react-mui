import React from 'react';
import { Button } from '@mui/material';

import { useAppThemeContext, useDrawerContext } from '../../../contexts';
import { LayoutBase } from '../../components';

export const Dashboard: React.FC = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <LayoutBase title="Tela Principal">
      <h1>Dashboard</h1>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch Theme
      </Button>
      <Button variant="contained" color="secondary" onClick={toggleDrawerOpen}>
        Open Menu
      </Button>
    </LayoutBase>
  );
};
