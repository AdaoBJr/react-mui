import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IToolBarDetailsProps {
  onValueChange?: (text: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveBackButton?: boolean;
  onClickNewButton?: () => void;
  onClickBackButton?: () => void;
  onClickDeleteButton?: () => void;
  onClickSaveButton?: () => void;
  onClickSaveBackButton?: () => void;
}
export const ToolBarDetails: React.FC<IToolBarDetailsProps> = (props) => {
  const {
    textNewButton = 'Novo',
    showNewButton = true,
    showBackButton = true,
    showDeleteButton = true,
    showSaveButton = true,
    showSaveBackButton = false,
    onClickNewButton,
    onClickBackButton,
    onClickDeleteButton,
    onClickSaveButton,
    onClickSaveBackButton,
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
      <Box flex={1} display="flex" justifyContent="start" gap={1}>
        {showSaveButton && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={onClickSaveButton}
            startIcon={<Icon>save</Icon>}
          >
            Salvar
          </Button>
        )}
        {showSaveBackButton && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickSaveBackButton}
            startIcon={<Icon>save</Icon>}
          >
            Salvar e voltar
          </Button>
        )}
        {showDeleteButton && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickDeleteButton}
            startIcon={<Icon>delete</Icon>}
          >
            Apagar
          </Button>
        )}
        {showNewButton && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickNewButton}
            startIcon={<Icon>add</Icon>}
          >
            {textNewButton}
          </Button>
        )}
        {showBackButton && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickBackButton}
            startIcon={<Icon>arrow_back</Icon>}
          >
            Voltar
          </Button>
        )}
      </Box>
    </Box>
  );
};
