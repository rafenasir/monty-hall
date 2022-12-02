import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import useQuery from "@tanstack/react-query";

const filters = [
  { value: "Yes", label: "Want To Switch" },
  { value: "No", label: "Don't Want to Switch" },
];
export default function DialogueBox() {
  const [open, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState("No");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSwitch = (e) => {
    setSwitchValue(e.target.value);
    console.log(switchValue);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Start The Game
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Your Options</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select how many games you want to simulate and do you want to switch
            the box or not by default the this will not switch.
          </DialogContentText>
          <TextField
            select
            autoFocus
            margin="dense"
            id="name"
            label="Wnat Switch"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleSwitch}
          >
            {filters.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            type="number"
            margin="dense"
            id="name"
            label="Number of Games"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
