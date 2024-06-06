import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TableContent from './TableContent';



const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
const approvalStatusOptions = ['Approved', 'Pending', 'Rejected'];

function TableFile() {
  const [open, setOpen] = useState(false);
  const [approvalStatusOpen, setApprovalStatusOpen] = useState(false);
  const anchorRef = useRef(null);
  const approvalStatusAnchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [approvalStatusIndex, setApprovalStatusIndex] = useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleApprovalStatusMenuItemClick = (event, index) => {
    setApprovalStatusIndex(index);
    setApprovalStatusOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleApprovalStatusToggle = () => {
    setApprovalStatusOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleApprovalStatusClose = (event) => {
    if (approvalStatusAnchorRef.current && approvalStatusAnchorRef.current.contains(event.target)) {
      return;
    }

    setApprovalStatusOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button onClick={handleClick} color="inherit">
          {options[selectedIndex]}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          color="inherit"
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup
        variant="contained"
        ref={approvalStatusAnchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button onClick={handleApprovalStatusToggle} color="inherit">
          {approvalStatusOptions[approvalStatusIndex]}
        </Button>
        <Button
          size="small"
          aria-controls={approvalStatusOpen ? 'approval-status-menu' : undefined}
          aria-expanded={approvalStatusOpen ? 'true' : undefined}
          aria-label="select approval status"
          aria-haspopup="menu"
          onClick={handleApprovalStatusToggle}
          color="inherit"
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Popper
        sx={{
          zIndex: 1,
        }}
        open={approvalStatusOpen}
        anchorEl={approvalStatusAnchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleApprovalStatusClose}>
                <MenuList id="approval-status-menu" autoFocusItem>
                  {approvalStatusOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === approvalStatusIndex}
                      onClick={(event) => handleApprovalStatusMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
<hr />
      <TableContent />
    </>
  );
}

export default TableFile;
