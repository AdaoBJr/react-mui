import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Divider, Drawer, List, useMediaQuery, useTheme } from '@mui/material';

import { ReactComponent } from '../../../typesDefault';
import { useDrawerContext } from '../../../contexts';
import profile from '../../../assets/images/profile.jpg';
import { ListItemLink } from '../ListItemLink';

export const SideNavigation: React.FC<ReactComponent> = ({ children }) => {
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: theme.spacing(28),
            height: '100%',
          }}
        >
          <Box
            width="100%"
            sx={{
              height: theme.spacing(20),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              src={profile}
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemLink icon="home" label="Home" to="/" />
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
