import { useCallback, useState, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';

import AppThemeStore from './AppThemeStore';
import { LightTheme, DarkTheme } from '../../themes';
import { ReactComponent } from '../../typesDefault';

const AppThemeProvider: React.FC<ReactComponent> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(
    () => setThemeName((prevState) => (prevState === 'light' ? 'dark' : 'light')),
    [themeName, setThemeName]
  );

  const theme = useMemo(
    () => (themeName === 'light' ? LightTheme : DarkTheme),
    [themeName]
  );

  return (
    <AppThemeStore.Provider value={{ themeName, toggleTheme }}>
      <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </AppThemeStore.Provider>
  );
};

export default AppThemeProvider;
