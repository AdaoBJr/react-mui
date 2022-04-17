import React, { ReactNode } from 'react';
import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useDrawerContext } from '../../../contexts';
import { ReactComponent } from '../../../typesDefault';

interface ILayoutBase extends ReactComponent {
  title: string;
  toolBar?: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBase> = (props) => {
  const { title, toolBar, children } = props;

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: theme.spacing(smDown ? 6 : mdDown ? 8 : 12),
          gap: 1,
        }}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipses',
          }}
        >
          {title}
        </Typography>
      </Box>
      {toolBar && <Box>{toolBar}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
