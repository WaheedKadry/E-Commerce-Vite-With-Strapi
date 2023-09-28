import {
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import React, { useState } from "react";
// shoping Cart Badge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
// Search func
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid #777",
  "&:hover": {
   // @ts-ignore
   border:`1px solid ${theme.palette.mainRed.main}`,
  },
  "&:focus": {
   // @ts-ignore
   border:`1px solid ${theme.palette.mainRed.main}`,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
// Menu Categories In Search
const options = [
  "All Categories",
  "Car",
  "Clothes",
  "Electronics",
  "Laptop",
  "Desktop",
  "Camera",
  "Toys",
];
const HeaderMiddle = () => {
  let theme = useTheme();
  // Menu Categories In Search
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        flexDirection:{lg:"row", xs:"column"},
       gap:{xs:2, lg:0},
      }}
    >
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2" fontWeight={"bold"}>
          Waheed Shop
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexGrow: "0.4",
          alignItems: "center",
        }}
      >
        <Search
          sx={{
            width: "100% !important",
            // @ts-ignore
            border: `1px solid ${theme.palette.borderSearch.main}`,
            borderRadius: "22px",
            display: "flex",
            justifyContent: "space-between",
            
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{borderBottomLeftRadius:"22px", borderTopLeftRadius:"22px",}}
          onFocus={(e) => console.log(e.target.parentElement.parentElement.style.boxShadow = `0px 1px 2px 1.5px red`)}
          onBlur={(e) => console.log(e.target.parentElement.parentElement.style.boxShadow = `none`)}
          />

          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              borderBottomRightRadius: "22px",
              WebkitBorderTopRightRadius: "22px",
              p: "0",
              "&:hover": {
                cursor: "pointer",
                // @ts-ignore
                bgcolor: theme.palette.myColor.hover,
              },
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                primary=""
                secondary={options[selectedIndex]}
                sx={{
                  width: 93,
                  textAlign: "center",
                }}
              />
              <ExpandMore />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Search>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={1} color={"error"}>
            <ShoppingBagOutlinedIcon />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
};

export default React.memo(HeaderMiddle);
