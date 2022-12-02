import React from "react";
import Button from "@mui/material/Button";

export default function StartGameButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {};
  return <Button onClick={handleClickOpen}>Start Game</Button>;
}
