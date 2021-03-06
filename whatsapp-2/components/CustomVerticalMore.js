import * as React from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { auth } from '../firebase';
import { signOut } from '@firebase/auth';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton    
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>New Group</MenuItem>
        <MenuItem onClick={handleClose}>Create a room</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Archive</MenuItem>
        <MenuItem onClick={handleClose}>Starred</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
      </Menu>
    </>
  );
}
