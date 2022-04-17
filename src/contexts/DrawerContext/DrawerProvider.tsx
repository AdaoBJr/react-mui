import { useCallback, useState } from 'react';

import DrawerStore from './DrawerStore';
import { ReactComponent } from '../../typesDefault';

const DrawerProvider: React.FC<ReactComponent> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(
    () => setIsDrawerOpen((prevState) => !prevState),
    [isDrawerOpen, setIsDrawerOpen]
  );

  return (
    <DrawerStore.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerStore.Provider>
  );
};

export default DrawerProvider;
