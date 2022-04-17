import React from 'react';
import { Box } from '@mui/system';
import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ReactComponent } from '../../../typesDefault';
import profile from '../../../assets/images/profile.jpg';
import { useDrawerContext } from '../../../contexts';

const sideNavigation: React.FC<ReactComponent> = ({ children }) => {
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
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

export default sideNavigation;
