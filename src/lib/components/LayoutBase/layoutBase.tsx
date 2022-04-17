import { Box } from '@mui/material';
import React from 'react';
import { ReactComponent } from '../../../typesDefault';

interface ILayoutBase extends ReactComponent {}

export const LayoutBase: React.FC<ILayoutBase> = ({ children }) => {
  return <Box>{children}</Box>;
};
