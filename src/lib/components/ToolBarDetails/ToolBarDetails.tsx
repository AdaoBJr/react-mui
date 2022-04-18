import { Box, Button, Icon, Paper, Skeleton, Typography, useTheme } from '@mui/material';

interface IToolBarDetailsProps {
  onValueChange?: (text: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveBackButton?: boolean;
  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;
  showSaveBackButtonLoading?: boolean;
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
    showNewButtonLoading = false,
    showBackButtonLoading = false,
    showDeleteButtonLoading = false,
    showSaveButtonLoading = false,
    showSaveBackButtonLoading = false,
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
        paddingX: 2,
        gap: 1,
      }}
      component={Paper}
    >
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={onClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            Salvar
          </Typography>
        </Button>
      )}
      {showSaveButtonLoading && <Skeleton width={110} height={60} />}

      {showSaveBackButton && !showSaveBackButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickSaveBackButton}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            Salvar e voltar
          </Typography>
        </Button>
      )}
      {showSaveBackButtonLoading && <Skeleton width={160} height={60} />}

      {showDeleteButton && !showDeleteButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickDeleteButton}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            Apagar
          </Typography>
        </Button>
      )}
      {showDeleteButtonLoading && <Skeleton width={110} height={60} />}

      {showNewButton && !showNewButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickNewButton}
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            {textNewButton}
          </Typography>
        </Button>
      )}
      {showNewButtonLoading && <Skeleton width={110} height={60} />}

      {showBackButton && !showBackButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            Voltar
          </Typography>
        </Button>
      )}
      {showBackButtonLoading && <Skeleton width={110} height={60} />}
    </Box>
  );
};
