// /components/Footer/Footer.tsx
// Saturday, September 30th 2023, 12:57 am

import {Fab} from '@mui/material/';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {NextLinkComposed} from '../Link/Link';

export default function Footer() {
  return (
    <Fab
      color='secondary'
      component={NextLinkComposed}
      size='small'
      sx={{mb: 2, position: 'fixed', bottom: 20, right: 20}}
      to='/#'
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
