import { Drawer, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ReactComponent } from '../../../typesDefault';

const sideNavigation: React.FC<ReactComponent> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)}>Dados</Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

export default sideNavigation;
