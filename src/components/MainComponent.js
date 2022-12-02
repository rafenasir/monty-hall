import React from "react";
import Button from "@mui/material/Button";
import DialogueBox from "./DialogueBox";

export default function MainComponent() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box>
      <Button onClick={handleClickOpen}>Start Game 1</Button>
      {open ? <DialogueBox /> : null}
    </Box>
  );
}
