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
import { useFormik } from "formik";
import * as yup from "yup";

const drawerWidth = 400;
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

const PaletteFormNav = (props) => {
  const { classes, open, handleDrawerOpen, color, palette } = props;
  const [namePalette, setPaletteName] = React.useState("");

  const formik1 = useFormik({
    initialValues: {
      namePalette: "",
    },
    validationSchema: yup.object({
      namePalette: yup
        .string()
        .required("Required")
        .test(
          "isPaletteNameUnique",
          "Palette Name Already made!",
          function validateName(namePalette) {
            console.log(namePalette);
            console.log(palette);
            let isValid = palette.every(
              ({ paletteName }) => paletteName !== namePalette
            );
            return isValid;
          }
        ),
    }),
    onSubmit: (values) => {
      let newName = values.namePalette;
      console.log(newName);
      setPaletteName(values.namePalette);
      const newPalette = {
        paletteName: newName,
        id: newName.toLowerCase().replace(/ /g, "-"),
        colors: color,
      };
      console.error(newPalette);
      if (newPalette.colors.length !== 0) {
        props.savePalette(newPalette);
        props.nav("/");
      }
    },
  });
  console.warn(formik1.errors);

  return (
    <div>
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
            Persistent drawer
          </Typography>
          <form onSubmit={formik1.handleSubmit}>
            <input
              type="text"
              id="namePalette"
              name="namePalette"
              value={formik1.values.namePalette}
              onChange={formik1.handleChange}
            />
            {formik1.errors.namePalette ? (
              <span className={{ color: "red" }}>
                {formik1.errors.namePalette}
              </span>
            ) : null}
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
            <Link to="/">
              <Button type="submit " variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default WithRoutes(PaletteFormNav);
