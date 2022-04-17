import { createContext } from 'react';

interface IAppThemeStore {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppThemeStore = createContext({} as IAppThemeStore);

export default AppThemeStore;
