import { createContext, useCallback, useState, useMemo, useContext } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';

import { LightTheme, DarkTheme } from '../themes';
import { ReactComponent } from '../typesDefault';

interface IAppThemeContext {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppThemeContext = createContext({} as IAppThemeContext);

export const useAppThemeContext = () => useContext(AppThemeContext);

export const AppThemeProvider: React.FC<ReactComponent> = ({ children }) => {
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
    <AppThemeContext.Provider value={{ themeName, toggleTheme }}>
      <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </AppThemeContext.Provider>
  );
};
