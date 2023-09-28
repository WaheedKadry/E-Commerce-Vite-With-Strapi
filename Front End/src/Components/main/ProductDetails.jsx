import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState } from "react";
const ProductDetails = ({ clickProduct }) => {
  const [alignment, setAlignment] = useState("left");
  const [selectImg, setSelectImg] = useState(0);
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexWrap: { xs: "wrap", sm: "nowrap" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box display={"flex"}>
        <img
          src={clickProduct.Image.data[selectImg].attributes.url}
          width={300}
        />
      </Box>
      <Box
        sx={{
          textAlign: { xs: "center", py: 2 },
        }}
      >
        <Typography variant="h5">{clickProduct.Title}</Typography>
        <Typography
          variant="h5"
          sx={{
            my: 0.4,
            fontSize: "22px",
            color: "crimson",
          }}
        >
          {clickProduct.Price}$
        </Typography>
        <Typography variant="body1">{clickProduct.Description}</Typography>
        <Stack direction={"row"} gap={1} my={2} justifyContent={"center"}>
          <ToggleButtonGroup
            value={selectImg}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px",
                opacity: "1 !important",
                background: "initial",
              },
              flexWrap: "wrap",
            }}
          >
            {clickProduct.Image.data.map((e, i) => {
              return (
                <ToggleButton
                  key={Math.random()}
                  value={i}
                  aria-label="left aligned"
                  height={100}
                  sx={{
                    borderRadius: 3,
                    maxWidth: "calc(100% / 3)",
                    p: 0,
                    opacity: 0.5,
                  }}
                >
                  <img
                    src={e.attributes.url}
                    // width={90}
                    style={{ borderRadius: 3, width: "100%" }}
                    height={100}
                    onClick={() => setSelectImg(i)}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>
        <Button
          size="large"
          sx={{ textTransform: "capitalize !important", gap: 1 }}
          variant="contained"
        >
          <AddShoppingCartIcon sx={{ mr: 1 }} fontSize={"small"} /> Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(ProductDetails);
