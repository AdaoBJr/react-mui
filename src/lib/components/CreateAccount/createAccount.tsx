import { Button } from '@mui/material';
import { useAppThemeContext } from '../../../contexts/AppThemeContext';

const createAccount: React.FC = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <>
      <div>createAccount</div>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch Theme
      </Button>
    </>
  );
};

export default createAccount;
