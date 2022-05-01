import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { WithRoutes } from "./WithRoutes";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import { AppBar } from "./styles/PaletteFormNavStyles";
import { styles } from "./styles/PaletteFormNavStyles";

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
  const handleClose = () => {
    setOpen(false);
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
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(WithRoutes(PaletteFormNav));
