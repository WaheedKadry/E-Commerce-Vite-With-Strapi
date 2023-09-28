import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import GrassIcon from "@mui/icons-material/Grass";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MicIcon from "@mui/icons-material/Mic";
import Face2Icon from "@mui/icons-material/Face2";
import HubIcon from "@mui/icons-material/Hub";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BentoIcon from "@mui/icons-material/Bento";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";

let categoriesWidth = 250;
const HeaderBottom = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let theme = useTheme();
  // Drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative !important",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
            width: categoriesWidth,
            justifyContent: "space-between",
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              p: 0,
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              m: "0",
              p: "0",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <StormOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText>Fashion</ListItemText>
                <Typography variant="body1" color="text.secondary">
                  <KeyboardArrowRightOutlinedIcon />
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <LaptopChromebookOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText>Electronics</ListItemText>
                <Typography variant="body1" color="text.secondary">
                  <KeyboardArrowRightOutlinedIcon />
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <TwoWheelerOutlinedIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText>Bikes</ListItemText>
                <Typography variant="body1" color="text.secondary">
                  <KeyboardArrowRightOutlinedIcon />
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <GrassIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText> Home & Garden</ListItemText>
                <Typography variant="body1" color="text.secondary">
                  <KeyboardArrowRightOutlinedIcon />
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <CardGiftcardIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText>Gifts</ListItemText>
                <Typography variant="body1" color="text.secondary">
                  <KeyboardArrowRightOutlinedIcon />
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <MicIcon fontSize="medium" />
                  </Typography>
                </ListItemIcon>
                <ListItemText> Music</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <Face2Icon fontSize="medium" />
                  </Typography>
                </ListItemIcon>
                <ListItemText>Health & Beauty</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <HubIcon fontSize="medium" />
                  </Typography>
                </ListItemIcon>
                <ListItemText> Music Pets</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <SmartToyIcon fontSize="medium" />
                  </Typography>
                </ListItemIcon>
                <ListItemText>Baby Toys</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <BentoIcon fontSize="medium" />
                  </Typography>
                </ListItemIcon>
                <ListItemText>Groceries</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <Paper
            sx={{
              width: categoriesWidth,
              height: "50px",
              maxWidth: "100%",
            }}
            onClick={handleClose}
          >
            <MenuList sx={{ p: "0", m: 0 }}>
              <MenuItem>
                <ListItemIcon>
                  <Typography variant="body1" color="text.secondary">
                    <FilterVintageIcon fontSize="medium" />
                  </Typography>
                </ListItemIcon>
                <ListItemText>Automotive</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1015px)") && (
        <Stack
          className="waheed"
          direction={"row"}
          alignItems={"center"}
          sx={{
            justifyContent: "space-between",
            width: "75%",
          }}
        >
          <Links title="Home" />
          <Links title="Mega Menu" />
          <Links title="Full Screen Menu" />
          <Links title="Pages" />
          <Links title="User Account" />
          <Links title="Vendor Account" />
        </Stack>
      )}
      {useMediaQuery("(max-width:1015px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-yigqt9-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: "40%",
            mx: "auto",
            mt: 6,
            pt: 5,
            position: "relative",
          }}
        >
          <IconButton
            sx={{
              transition: "0.3s",
              "&:hover": { transform: "rotate(180deg)", color: "red" },
              position: "absolute",
              top: "0",
              right: "15px",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <CloseIcon />
          </IconButton>
          {[
            {
              mainLink: "Home",
              subLink: [
                "Market 1",
                "Market 2",
                "Furniture",
                "Grocery 1",
                "Grocery 2",
                "Grocery 3",
                "Health and Beauty",
                "Fashion 1",
                "Fashion 2",
                "Fashion 3",
                "Gift Store",
                "Gadget",
              ],
            },
            {
              mainLink: "Mega Menu",
              subLink: [
                {
                  main: "Home",
                  sub: [
                    "Market 1",
                    "Furniture",
                    "Grocery-v1",
                    "Grocery-v2",
                    "Grocery-v3",
                    "Health and Beauty",
                    "Fashion",
                    "Gift Store",
                    "Gadget",
                  ],
                },
                {
                  main: "User Account",
                  sub: [
                    "Order List",
                    "Order Details",
                    "View Profile",
                    "Edit Profile",
                    "Address List",
                    "Add Address",
                    "All tickets",
                    "Ticket details",
                    "Wishlist",
                  ],
                },
                { main: "Vendor Account", sub: ["Dashboard", "Profile"] },
                { main: "Products", sub: ["All products", "Add/Edit product"] },
                { main: "Orders", sub: ["All orders", "Order details"] },
                {
                  main: "Sale Page",
                  sub: ["Sales Version 1", "Sales Version 2"],
                },
                {
                  main: "Shop",
                  sub: [
                    "Search product",
                    "Single product",
                    "Cart",
                    "Checkout",
                    "Alternative Checkout",
                    "Order confirmation",
                  ],
                },
              ],
            },
            { mainLink: "Full Screen Menu", subLink: [] },
            { mainLink: "Pages", subLink: [] },
            { mainLink: "User Account", subLink: [] },
            { mainLink: "Vendor Account", subLink: [] },
          ].map((e) => {
            return (
              <Accordion key={Math.random()} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{e.mainLink}</Typography>
                </AccordionSummary>
                {e.mainLink === "Home" && (
                  <List sx={{ py: 0, my: 0 }}>
                    {e.subLink.map((j) => {
                      return (
                        <ListItem key={Math.random()} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={j} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
                {e.mainLink === "Mega Menu" &&
                  e.subLink.map((h) => {
                    return (
                      <Accordion
                        key={Math.random()}
                        elevation={0}
                        sx={{ px: 2 }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{h.main}</Typography>
                        </AccordionSummary>
                        <List sx={{ py: 0, my: 0 }}>
                          {h.sub.map((y) => {
                            return (
                              <ListItem key={Math.random()}>
                                <ListItemButton>
                                  <ListItemText primary={y} />
                                </ListItemButton>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Accordion>
                    );
                  })}
                {e.mainLink === "Full Screen Menu" && <h1></h1>}
                {e.mainLink === "Pages" && <h1></h1>}
                {e.mainLink === "User Account" && <h1></h1>}
                {e.mainLink === "Vendor Account" && <h1></h1>}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default React.memo(HeaderBottom);
