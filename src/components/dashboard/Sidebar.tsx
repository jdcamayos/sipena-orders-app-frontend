import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { Link as LinkRouter } from 'react-router-dom'
// import Button from '@mui/material/Button'
import List from '@mui/material/List'
// import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
// import MailIcon from '@mui/icons-material/Mail'
import ListAltIcon from '@mui/icons-material/ListAlt';

// type Anchor = 'top' | 'left' | 'bottom' | 'right'

type Props = {
  openSideBar: boolean
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar(props: Props) {
  const { openSideBar, setOpenSideBar } = props

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenSideBar(false)}
      onKeyDown={() => setOpenSideBar(false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
      <List>
        {/* {['New Order', 'Orders'].map((text, index) => ( */}
          <ListItem disablePadding>
            <ListItemButton component={LinkRouter} to='/order/new'>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="New Order" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={LinkRouter} to='/'>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
        {/* ))} */}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="left"
        open={openSideBar}
        onClose={() => setOpenSideBar(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}