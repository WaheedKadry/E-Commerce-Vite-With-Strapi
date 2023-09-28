import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ColorModeContext } from "../../Styles/theme/theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// select Menu
const options = ["AR", "EN"];
const HeaderTop = () => {
  // mode icon
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  // select Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
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
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            variant="body2"
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: theme.palette.mainRed.main,
              borderRadius: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Hot
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              fontWeight: "300",
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div className="ModeIcon">
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                sx={{
                  // @ts-ignore
                  color: theme.palette.header1.main,
                  fontSize: "20px",
                }}
              >
                <LightModeOutlined />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
              >
                <DarkModeOutlined fontSize={"small"} />
              </IconButton>
            )}
          </div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ m: "0", p: '0', 
            ".MuiSvgIcon-root": { color: "#fff" } ,
            ".MuiListItem-root.MuiListItem-gutters": { p: 1 } 
          }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "15px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <KeyboardArrowDownIcon 
              color={"#fff"} />
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
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{
                  fontSize: "15px",
                  p: "3px 10px",
                  minHeight: "13px",
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              mx: 1,
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(HeaderTop);
