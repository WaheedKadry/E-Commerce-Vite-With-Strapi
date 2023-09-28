import { Box, Link, Paper, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
const Links = ({ title }) => {
  let theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          position: "relative",
          "&:hover": { cursor: "pointer" },
          ":hover .home-link-showHover": { display: "block" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            // @ts-ignore
            "&:hover": {
              // @ts-ignore
              color: theme.palette.mainRed.main,
              fontWeight: "bold",
            },
          }}
        >
          {title}
        </Typography>
        <ExpandMoreIcon />

        <Box
          className="home-link-showHover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "none",
            zIndex: "9999",
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem
                  disablePadding
                  sx={{ "&:hover .sub-link": { display: "block" } }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontWeight: "300",
                          fontSize: "15px",
                        },
                      }}
                      primary="Dashboard"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    "&:hover .sub-link": { display: "block" },
                    position: "relative",
                  }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontWeight: "300",
                          fontSize: "15px",
                        },
                      }}
                      primary="Products"
                    />
                    <Box flexGrow={1} />
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemButton>
                  <Box
                    className=" sub-link"
                    sx={{
                      position: "absolute",
                      left: "100%",
                      top: "0",
                      display: "none",
                    }}
                  >
                    <Paper sx={{ ml: 1 }}>
                      <nav aria-label="secondary mailbox folders">
                        <List>
                          <ListItem disablePadding>
                            <Link
                              href="https://e-commerce-vite-with-strapi.onrender.com/admin/content-manager/"
                              target="_blank"
                            >
                              <ListItemButton>
                                <ListItemText
                                  sx={{
                                    ".MuiTypography-root": {
                                      fontWeight: "300",
                                      fontSize: "15px",
                                    },
                                    width: "85px",
                                  }}
                                  primary="Add Product"
                                />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText
                                sx={{
                                  ".MuiTypography-root": {
                                    fontWeight: "300",
                                    fontSize: "15px",
                                  },
                                }}
                                primary="Edit Product"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Paper>
                  </Box>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ "&:hover .sub-link": { display: "block" } }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontWeight: "300",
                          fontSize: "15px",
                        },
                      }}
                      primary="Orders"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ "&:hover .sub-link": { display: "block" } }}
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        ".MuiTypography-root": {
                          fontWeight: "300",
                          fontSize: "15px",
                        },
                      }}
                      primary="Profile"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(Links);
