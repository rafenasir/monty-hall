import React from "react";
import Button from "@mui/material/Button";
import DialogueBox from "./DialogueBox";

export default function MainComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {};
  return (
    <Box>
      <Button onClick={handleClickOpen}>Start Game</Button>
    </Box>
  );
}
