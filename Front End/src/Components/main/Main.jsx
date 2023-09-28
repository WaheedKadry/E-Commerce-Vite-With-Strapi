import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import "./main.css";
import Tooltip from "@mui/material/Tooltip";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../Rtk/Products";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
const Main = () => {
  // redux
  let allProductsApi = "/products?populate=*";
  let mencategoryApi = "/products?populate=*&filters[Category][$eq]=Men";
  let womencategoryApi = "/products?populate=*&filters[Category][$eq]=Women";
  const [MyDataApi, setMyDataApi] = useState(allProductsApi);
  const { data, error, isLoading } = useGetProductByNameQuery(MyDataApi);
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) setMyDataApi(newValue);
  };
  let theme = useTheme();
  // popUp Dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // api view
  let [clickProduct, setClickProduct] = useState({});
  if (data) {
    console.log(data);
  }
  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">
          Products Is {error.data.error.message}
        </Typography>
        <Typography variant="h6">Please Try Agian Later</Typography>
      </Container>
    );
  }
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" fontWeight={"bold"}>
            Selected Products
          </Typography>
          <Typography variant="body1" fontWeight={"300"}>
            All Our New Arrivals in a Exclusive Brand Selection{" "}
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={MyDataApi}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              background: "initial",
            },
            flexWrap: "wrap",
          }}
        >
          <Tooltip
            placement="top-start"
            title={
              <>
                <Typography variant="body1" sx={{ color: "orange" }}>
                  Copy E-mail & Password To login Strapi
                </Typography>
                <Typography variant="body1">
                  Email: waheedonly256@gmail.com
                </Typography>
                <Typography variant="body1">Password: 256Waheed</Typography>
              </>
            }
            placement="top-start"
          >
            <Link
              href="https://e-commerce-vite-with-strapi.onrender.com/admin/content-manager"
              target="_blank"
            >
              <ToggleButton
                sx={{
                  color: "indianred",
                  border: "2px solid indianred !important",
                  my: 1,
                  mx: "16px !important",
                  fontWeight: "bold",
                }}
                className="myBtn"
                value="addProduct"
                aria-label="left aligned"
              >
                Add Products
              </ToggleButton>
            </Link>
          </Tooltip>

          <ToggleButton
            sx={{ color: theme.palette.text.primary, my: 1 }}
            className="myBtn"
            value={allProductsApi}
            aria-label="left aligned"
            // onClick={() => setMyDataApi(allProductsApi)}
          >
            ALL Products
          </ToggleButton>
          <ToggleButton
            className="myBtn"
            value={mencategoryApi}
            aria-label="centered"
            sx={{
              mx: "16px !important",
              color: theme.palette.text.primary,
              my: 1,
            }}
            // onClick={() => setMyDataApi(mencategoryApi)}
          >
            MEN Categories
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary, my: 1 }}
            className="myBtn"
            value={womencategoryApi}
            aria-label="right aligned"
            // onClick={() => setMyDataApi(womencategoryApi)}
          >
            WOMEN Categories
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        sx={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: { xs: "center", sm: "space-between" },
        }}
      >
        {data &&
          data.data.map((e) => {
            return (
              <Card
                component={motion.div}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 2.6, type: "spring", stiffness: 80 }}
                key={Math.random()}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    transform: "scale(1.1) rotate(2deg)",
                    transition: "0.35s",
                  },
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={`${e.attributes.Title} Image`}
                    height="277"
                    image={e.attributes.Image.data[0].attributes.url}
                  />
                </Box>
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" gutterBottom>
                      {e.attributes.Title}
                    </Typography>
                    <Typography variant="subtitle1" component={"p"}>
                      ${e.attributes.Price}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textTransform: "capitalize !important" }}
                  >
                    {e.attributes.Description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    size="large"
                    sx={{ textTransform: "capitalize !important", gap: 1 }}
                    onClick={() => {
                      setClickProduct(e.attributes);
                      handleClickOpen();
                    }}
                  >
                    <AddShoppingCartIcon fontSize={"small"} /> Add To Cart
                  </Button>

                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={e.attributes.Rating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", sm: "90%", md: 800 },
            pt: { xs: 5, md: 0 },
            pb: { xs: 1, md: 0 },
          },
        }}
      >
        <IconButton
          sx={{
            transition: "0.3s",
            "&:hover": { transform: "rotate(180deg)", color: "red" },
            position: "absolute",
            top: "0px",
            right: "15px",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <ProductDetails {...{ clickProduct }} />
      </Dialog>
    </Container>
  );
};
export default React.memo(Main);
