import { styled, useTheme } from "@mui/material/styles";
import sizes from "./sizes";
import MuiAppBar from "@mui/material/AppBar";
const drawerWidth = 400;
const styles = {
  navBtns: {
    marginRight: "1rem!important",
    [sizes.down("xs")]: {
      marginRight: "0!important",
    },
  },

  btn: {
    margin: "0 0.4rem!important",
    [sizes.down("xs")]: {
      margin: "0.07 0.1rem !important",
      padding: "2px!important",
    },
  },
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",

  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export { AppBar, styles };
