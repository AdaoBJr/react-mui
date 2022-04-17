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
  useTheme,
} from '@mui/material';

import { ReactComponent } from '../../../typesDefault';
import profile from '../../../assets/images/profile.jpg';

const sideNavigation: React.FC<ReactComponent> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent">
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
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

export default sideNavigation;
