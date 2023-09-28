import { Box, Paper, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./links.css"
const Links = () => {
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
          Home
        </Typography>
        <ExpandMoreIcon />

        <Box
          className="home-link-showHover"
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "170px",
            display: "none",
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                {[
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
                ].map((e) => {
                  return (
                    <ListItem key={Math.random()} disablePadding>
                      <ListItemButton>
                        <ListItemText
                          sx={{
                            ".MuiTypography-root": {
                              fontSize: "15px",
                              fontWeight: "bold",
                            },
                          }}
                          primary={e}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
      <Box 
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          // position: "relative",
          "&:hover": { cursor: "pointer" },
          ":hover .megaMenuLink-showHover": { display: "block" },
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
          Mega Menu
        </Typography>
        <ExpandMoreIcon />

        <Box
          className="megaMenuLink-showHover"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateX(-50%)",
        
            // minWidth: "170px",
            
            // display: "none",
            border:"10px solid blue",
          }}
        >
          <Paper sx={{ mt: 0,position:"relative" }}>
            <nav
              aria-label="secondary mailbox folders"
              // sx={{ display: "flex", alignItems: "center", mt:"5!", }}
            >
              <Box className="mega-home mega-width">
                <List>
                  <ListItem disablePadding sx={{ pointerEvents: "none" }}>
                    <ListItemButton>
                      <ListItemText
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "18px",
                            fontWeight: "bold",
                          },
                        }}
                        primary={"Home"}
                      />
                    </ListItemButton>
                  </ListItem>
                  {[
                    "Market 1",
                    "Furniture",
                    "Grocery-v1",
                    "Grocery-v2",
                    "Grocery-v3",
                    "Health and Beauty",
                    "Fashion 1",
                    "Gift Store",
                    "Gadget",
                  ].map((e) => {
                    return (
                      <ListItem key={Math.random()} disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": {
                                fontSize: "15px",
                                fontWeight: "bold",
                              },
                            }}
                            primary={e}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <Box className="mega-vendorAccount mega-width">
                <List>
                  <ListItem disablePadding sx={{ pointerEvents: "none" }}>
                    <ListItemButton>
                      <ListItemText
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "18px",
                            fontWeight: "bold",
                          },
                        }}
                        primary={"User Account"}
                      />
                    </ListItemButton>
                  </ListItem>
                  {["", "", "", "", "", "", "", "", ""].map((e) => {
                    return (
                      <ListItem key={Math.random()} disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": {
                                fontSize: "15px",
                                fontWeight: "bold",
                              },
                            }}
                            primary={e}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <Box className=" mega-width">
                <List>
                  <ListItem disablePadding sx={{ pointerEvents: "none" }}>
                    <ListItemButton>
                      <ListItemText
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "18px",
                            fontWeight: "bold",
                          },
                        }}
                        primary={"Vendor Account"}
                      />
                    </ListItemButton>
                  </ListItem>
                  {[
                    "Order List",
                    "Order Details",
                    "View Profile",
                    "Edit Profile",
                    "Address List",
                    "Add Address",
                    "All Tickets",
                    "Ticket Details",
                    "WishList",
                  ].map((e) => {
                    return (
                      <ListItem key={Math.random()} disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": {
                                fontSize: "15px",
                                fontWeight: "bold",
                              },
                            }}
                            primary={e}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              <Box className="mega-salePage mega-width">
                <List>
                  <ListItem disablePadding sx={{ pointerEvents: "none" }}>
                    <ListItemButton>
                      <ListItemText
                        sx={{
                          ".MuiTypography-root": {
                            fontSize: "18px",
                            fontWeight: "bold",
                          },
                        }}
                        primary={"Sale Page"}
                      />
                    </ListItemButton>
                  </ListItem>
                  {[
                    "Order List",
                    "Order Details",
                    "View Profile",
                    "Edit Profile",
                    "Address List",
                    "Add Address",
                    "All Tickets",
                    "Ticket Details",
                    "WishList",
                  ].map((e) => {
                    return (
                      <ListItem key={Math.random()} disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{
                              ".MuiTypography-root": {
                                fontSize: "15px",
                                fontWeight: "bold",
                              },
                            }}
                            primary={e}
                          />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </nav>
          </Paper>
        </Box>
      </Box>
      <Box 
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          // position: "relative",
          "&:hover": { cursor: "pointer" },
          ":hover .fullScreenLink-showHover": { display: "block" },
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
          Full Screen Menu
        </Typography>
        <ExpandMoreIcon />

        <Box
          className="fullScreenLink-showHover"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateX(-50%)",
        
            // minWidth: "170px",
            
            // display: "none",
            border:"10px solid blue",
          }}
        >
          <Paper sx={{ mt: 0,position:"relative" }}>
            <nav
              aria-label="secondary mailbox folders"
              // sx={{ display: "flex", alignItems: "center", mt:"5!", }}
            >
           aaaaaaa
            </nav>
          </Paper>
        </Box>
      </Box>
      <Box 
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          // position: "relative",
          "&:hover": { cursor: "pointer" },
          ":hover .pagesLink-showHover": { display: "block" },
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
          Pages
        </Typography>
        <ExpandMoreIcon />

        <Box
          className="pagesLink-showHover"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateX(-50%)",
        
            // minWidth: "170px",
            
            // display: "none",
            border:"10px solid blue",
          }}
        >
          <Paper sx={{ mt: 0,position:"relative" }}>
            <nav
              aria-label="secondary mailbox folders"
              // sx={{ display: "flex", alignItems: "center", mt:"5!", }}
            >
           aaaaaaa
            </nav>
          </Paper>
        </Box>
      </Box>
      <Box 
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        // position: "relative",
        "&:hover": { cursor: "pointer" },
        ":hover .userAccountLink-showHover": { display: "block" },
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
        User Account
      </Typography>
      <ExpandMoreIcon />

      <Box
        className="userAccountLink-showHover"
        sx={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateX(-50%)",
      
          // minWidth: "170px",
          
          // display: "none",
          border:"10px solid blue",
        }}
      >
        <Paper sx={{ mt: 0,position:"relative" }}>
          <nav
            aria-label="secondary mailbox folders"
            // sx={{ display: "flex", alignItems: "center", mt:"5!", }}
          >
         aaaaaaa
          </nav>
        </Paper>
      </Box>
    </Box>
    <Box 
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      // position: "relative",
      "&:hover": { cursor: "pointer" },
      ":hover .vendorLink-showHover": { display: "block" },
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
      Vendor Account
    </Typography>
    <ExpandMoreIcon />

    <Box
      className="vendorLink-showHover"
      sx={{
        position: "absolute",
        top: "50%",
        left: "10%",
        transform: "translateX(-50%)",
    
        // minWidth: "170px",
        
        // display: "none",
        border:"10px solid blue",
      }}
    >
      <Paper sx={{ mt: 0,position:"relative" }}>
        <nav
          aria-label="secondary mailbox folders"
          // sx={{ display: "flex", alignItems: "center", mt:"5!", }}
        >
       aaaaaaa
        </nav>
      </Paper>
    </Box>
  </Box>
    </>
  );
};

export default Links;
