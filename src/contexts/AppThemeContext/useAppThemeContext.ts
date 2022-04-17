import { useContext } from 'react';
import AppThemeStore from './AppThemeStore';

const useAppThemeContext = () => useContext(AppThemeStore);

export default useAppThemeContext;
