// /components/Navbar/Navbar.tsx
// Saturday, September 30th 2023, 12:57 am

import {useState} from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Typography,
  IconButton,
  Container,
  Stack,
  Box,
} from '@mui/material/';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Mail as MailIcon,
  PermIdentity as PermIdentityIcon,
} from '@mui/icons-material';
import {useRouter} from 'next/router';
import Link from './Link';
import AnimatedLink from './AnimatedLink';
import NavigationDrawer from './NavigationDrawer';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const {children} = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ElevateAppBar() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      link: '/#',
      name: 'HOME',
      icon: <HomeIcon />,
    },
    {
      link: '/#about',
      name: 'ABOUT',
      icon: <PermIdentityIcon />,
    },
    {
      link: '/#portfolio',
      name: 'PORTFOLIO',
      icon: <WorkIcon />,
    },
    {
      link: '/#contact',
      name: 'CONTACT',
      icon: <MailIcon />,
    },
  ];

  return (
    <nav id='navbar'>
      <HideOnScroll>
        <AppBar elevation={0} sx={{bgcolor: 'transparent'}}>
          <Container maxWidth='lg'>
            <Toolbar disableGutters sx={{display: 'flex'}}>
              <Link href='/' sx={{textDecoration: 'none !important', flexGrow: 1}} variant='button'>
                <Typography
                  variant='h6'
                  sx={{textTransform: 'lowercase', letterSpacing: 1, alignSelf: 'center'}}
                >
                  * anakin-dabir
                </Typography>
              </Link>

              {menuItems.map(item => (
                <AnimatedLink
                  key={item.name}
                  color='inherit'
                  href={item.link}
                  sx={{display: {xs: 'none', md: 'block'}}}
                  underline='none'
                  variant='button'
                >
                  <Stack direction='row' gap={2} sx={{alignItems: 'center'}}>
                    {item.icon}
                    {item.name}
                  </Stack>
                </AnimatedLink>
              ))}

              <IconButton
                aria-label='Open Navigation'
                size='large'
                sx={{display: {md: 'none'}}}
                onClick={handleDrawerToggle}
              >
                <MenuIcon color='secondary' fontSize='large' />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <NavigationDrawer menuItems={menuItems} open={mobileOpen} onClose={handleDrawerToggle} />
    </nav>
  );
}
