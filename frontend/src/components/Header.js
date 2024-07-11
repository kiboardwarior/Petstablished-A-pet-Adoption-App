import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

function Header(props) {
  const { sections, title } = props;
  const location = useLocation();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          sx={{ flex: 1 }}
        >
          <Link to='/'>
            <img src="/images/photo.png" width='150' alt='Logo'/>
          </Link>
        </Typography>
        <div>
          <IconButton component={Link} to="/signup" color="inherit">
            <PersonAddIcon />
          </IconButton>
          <IconButton component={Link} to="/login" color="inherit">
            <LoginIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            to={section.url}
            key={section.url}
            className={location.pathname === section.url ? 'activeNavLink' : ''}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
