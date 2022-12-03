import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { useQuery } from "@tanstack/react-query";

const filters = [
  { value: "Yes", label: "Want To Switch" },
  { value: "No", label: "Don't Want to Switch" },
];
export default function DialogueBox() {
  const [open, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState("No");
  const [numberOfGames, setNumberOfGames] = useState(0);
  const { isLoading, isError, data, error } = useQuery({
    switchNeeded: switchValue,
    number: numberOfGames,
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
        (res) => res.json()
      ),
  });

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
  const handleNumber = (e) => {
    setNumberOfGames(e.target.value);
  };
  const fetchResult = () => {
    //fetch API here after uploading the backend
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
            onChange={handleNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              fetchResult();
              handleClose();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
