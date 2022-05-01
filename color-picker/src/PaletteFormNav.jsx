import React, { Component } from "react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { WithRoutes } from "./WithRoutes";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import * as yup from "yup";
const drawerWidth = 400;
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
const styles = {
  navBtns: {
    marginRight: "1rem!important",
  },
  btn: {
    margin: "0 0.4rem!important",
  },
};

const PaletteFormNav = (props) => {
  const {
    open,
    handleDrawerOpen,
    color,
    palette,
    namePalette,
    setPaletteName,
    savePalette,
  } = props;

  const [isOpen, setOpen] = React.useState(false);
  const { classes } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="default" position="fixed" open={open}>
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
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              type="submit "
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              Go Back
            </Button>
          </Link>
          <Button
            className={classes.btn}
            variant="contained"
            onClick={handleClickOpen}
          >
            Save Palette
          </Button>
        </div>
      </AppBar>
      {isOpen && (
        <PaletteMetaForm
          color={color}
          palette={palette}
          setPaletteName={setPaletteName}
          savePalette={savePalette}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(WithRoutes(PaletteFormNav));
