import { Box, Button, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  let date = new Date();
  console.log();
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "HighlightText",
          fontSize: 18,
        }}
      >
        Designed By
        <Button
          variant="text"
          color="primary"
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
        >
          Waheed Kadry
        </Button>
        &copy;{date.getFullYear()}
      </Typography>
    </Box>
  );
};
export default React.memo(Footer);
