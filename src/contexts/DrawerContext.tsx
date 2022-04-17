import { createContext, useCallback, useContext, useState } from 'react';

import { ReactComponent } from '../typesDefault';

interface IDrawerContext {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => useContext(DrawerContext);

export const DrawerProvider: React.FC<ReactComponent> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(
    () => setIsDrawerOpen((prevState) => !prevState),
    [isDrawerOpen, setIsDrawerOpen]
  );

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
