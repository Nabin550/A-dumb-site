import * as React from "react";
import { useState } from "react";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
//import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import { Home, Logout } from "@mui/icons-material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import Profile from "../avatar/avatar";
import BasicCard from "../card/card";
import SignIn from "../../pages/landing_page/sign_in";
// <Divider /> use to create a line in between
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const components = {
  Home: <Profile />,
  Lists: <BasicCard />,
  Settings: <Profile />,
  Logout: <SignIn />,
};

export default function Side_Nav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (text) => {
    if (text === "Logout") {
      if (window.confirm("Are you sure you want to log out?")) {
        setIsLoggedIn(false);
      }
    } else {
      setSelectedItem(text);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      {isLoggedIn ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                {selectedItem}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <List>
              {["Home", "Lists", "Settings", "Logout"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  onClick={() => handleListItemClick(text)}
                >
                  <ListItemButton selected={selectedItem === text} />

                  <ListItemButton>
                    <ListItemIcon>
                      {index == 0 ? (
                        <Home />
                      ) : index == 1 ? (
                        <ChecklistIcon />
                      ) : index == 2 ? (
                        <SettingsIcon />
                      ) : index == 3 ? (
                        <Logout />
                      ) : (
                        <RefreshIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            {components[selectedItem]}
            <Typography paragraph>This is a paragraph 2.</Typography>
          </Main>
        </Box>
      ) : (
        <SignIn />
      )}
    </ThemeProvider>
  );
}
