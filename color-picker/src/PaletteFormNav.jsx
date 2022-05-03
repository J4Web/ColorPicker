import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { WithRoutes } from "./WithRoutes";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import { AppBar } from "./styles/PaletteFormNavStyles";
import { styles } from "./styles/PaletteFormNavStyles";
import { motion } from "framer-motion";

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
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.24 } }}
    >
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
            <AddToPhotosIcon />
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
            Save
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
    </motion.div>
  );
};

export default withStyles(styles)(WithRoutes(PaletteFormNav));
