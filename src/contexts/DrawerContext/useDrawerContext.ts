import { useContext } from 'react';
import DrawerStore from './DrawerStore';

const useDrawerContext = () => useContext(DrawerStore);

export default useDrawerContext;
