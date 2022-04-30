import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@mui/material/Button";
import DraggableColorBox from "./DraggableColorBox";
import { useState, useEffect } from "react";
import { WithRoutes } from "./WithRoutes";
import * as yup from "yup";
import { string } from "yup";
import { useFormik } from "formik";
// import colorSchema from "./Validations/validator";
const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    height: "calc(100vh - 64px)",
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

function NewPaletteForm(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currColor, setColor] = React.useState("teal");
  const [color, setmoreColor] = React.useState([]);
  const [namePalette, setPaletteName] = React.useState("");
  const { palette } = props;

  const formik = useFormik({
    initialValues: {
      newName: "",
    },
    validationSchema: yup.object().shape({
      newName: yup
        .string()
        .required("Required")
        .test(
          "isNameUnique",
          "Name must be unique",
          function validateColor(val) {
            try {
              const isValid = color.every(
                (p) => p.name.toLowerCase() !== val.toLowerCase()
              );
              console.log("promiseeee", isValid);
              console.log("val", val);
              console.log("currColor", currColor);
              return isValid;
            } catch (err) {
              console.log(err);
            }
          }
        ),
    }),
    onSubmit: (values) => {
      console.error(values);
      // evt.preventDefault();
      const idkColor = {
        color: currColor,
        name: values.newName,
      };
      console.log("obj colorr", idkColor);
      console.log(color);
      setmoreColor([...color, idkColor]);
    },
  });
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
      props.savePalette(newPalette);
      props.nav("/");
    },
  });
  console.warn(formik.errors);
  console.warn(formik1.errors);

  // const colorSchema = yup.object({
  //   color: string()
  //     .required("Color Name is required")
  //     .test(
  //       "Name must be unique",
  //       (val) => `${val.path} is not unique`,
  //       (val) => console.log(val),
  //       (val) =>
  //         color.every((el) => el.toLowerCase() !== val.color?.toLowerCase())
  //     ),
  // });

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // const handleChange = (evt) => {
  //   setNewName(evt.target.value);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const updateColor = (newColor) => {
    setColor(newColor.hex);
  };
  // const newColor = async (evt, newColor) => {
  //   evt.preventDefault();
  //   const idkColor = {
  //     color: currColor,
  //     name: newName,
  //   };
  //   // console.log(idkColor);
  //   try {
  //     const isValid = await colorSchema.validate(idkColor, {
  //       abortEarly: false,
  //     });
  //     console.log(isValid);
  //     moreColor([...color, idkColor]);
  //   } catch (err) {
  //     const result = {};
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   ValidatorForm.addValidationRule("isColorUnique", (value) => {
  //     color.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
  //   });
  // }, []);
  // const handleSubmit = (palette) => {
  //   let newName = "New Test Palette";
  //   const newPalette = {
  //     paletteName: newName,
  //     id: newName.toLowerCase().replace(/ /g, "-"),
  //     colors: color,
  //   };
  //   props.savePalette(newPalette);
  //   props.nav("/");
  // };
  // console.log(formik.values);
  return (
    <Box sx={{ display: "flex" }}>
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
          </form>
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
            {theme.direction === "ltr" && <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>

        <ChromePicker color={currColor} onChangeComplete={updateColor} />
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            id="newName"
            name="newName"
            value={formik.values.newName}
            onChange={formik.handleChange}
          />
          {formik.errors.newName ? <span>{formik.errors.newName}</span> : null}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ background: `${currColor}` }}
            // onClick={newColor}
          >
            Add Color
          </Button>
        </form>

        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {color.map((c) => {
          return <DraggableColorBox color={c.color} name={c.name} />;
        })}
      </Main>
    </Box>
  );
}

export default WithRoutes(NewPaletteForm);
