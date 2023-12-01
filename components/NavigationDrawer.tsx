// /components/NavigationDrawer/NavigationDrawer.tsx
// Saturday, September 30th 2023, 12:57 am

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from './Link';

interface MenuItems {
  link: string;
  name: string;
  icon: JSX.Element;
}

interface NavigationDrawerProps {
  menuItems: MenuItems[];
  open: boolean;
  onClose: () => void;
}

export default function NavigationDrawer(props: NavigationDrawerProps) {
  const {menuItems, open, onClose} = props;
  return (
    <Drawer anchor='right' open={open} variant='temporary' onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          px: 1,
          width: '300px',
          minHeight: {xs: 48, sm: 64},
        }}
      >
        <IconButton size='large' onClick={onClose}>
          <CloseIcon color='primary' fontSize='large' />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map(item => (
          <ListItem
            key={item.name}
            onClick={onClose}
            {...{component: Link, href: item.link, noLinkStyle: true}}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText sx={{color: '#ffffff'}} primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
