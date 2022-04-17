import React, { useCallback } from 'react';
import { Icon, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactComponent } from '../../../typesDefault';
import { useNavigate } from 'react-router-dom';

interface IListItemLinkProps extends ReactComponent {
  to: string;
  icon: string;
  label: string;
  onClick?: () => void;
}

const listItemLink: React.FC<IListItemLinkProps> = (props) => {
  const { to, icon, label, onClick } = props;
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(to);
    onClick?.();
  }, [to, onClick]);

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default listItemLink;
