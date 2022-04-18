import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IToolBarProps {
  inputSearchBar?: string;
  showSearchBar?: boolean;
  onValueChange?: (text: string) => void;
  textButton?: string;
  showButton?: boolean;
  onClickButton?: () => void;
}
export const ToolBar: React.FC<IToolBarProps> = (props) => {
  const {
    inputSearchBar = '',
    onValueChange,
    showSearchBar = false,
    onClickButton,
    textButton = 'Novo',
    showButton = true,
  } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: theme.spacing(5),
        marginX: 1,
        padding: 1,
        gap: 1,
      }}
      component={Paper}
    >
      {showSearchBar && (
        <TextField
          size="small"
          value={inputSearchBar}
          placeholder="Pesquisar..."
          onChange={(e) => onValueChange?.(e.target.value)}
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {showButton && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={onClickButton}
            endIcon={<Icon>add</Icon>}
          >
            {textButton}
          </Button>
        )}
      </Box>
    </Box>
  );
};
