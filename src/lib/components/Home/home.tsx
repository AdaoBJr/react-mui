import { Button } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../../contexts';

const home: React.FC = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch Theme
      </Button>
      <Button variant="contained" color="secondary" onClick={toggleDrawerOpen}>
        Open Menu
      </Button>
    </>
  );
};

export default home;
