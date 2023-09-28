import Fab from "@mui/material/Fab";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import { Zoom } from "@mui/material";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({ threshold: 200 })}>
      <Fab
        onClick={() => {
          scrollTo(0, 0);
        }}
        size="small"
        variant="extended"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardControlKeyIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default React.memo(ScrollToTop);
