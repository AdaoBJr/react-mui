import { createContext } from 'react';

interface IDrawerStore {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerStore = createContext({} as IDrawerStore);

export default DrawerStore;
