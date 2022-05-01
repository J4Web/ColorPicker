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

import { WithRoutes } from "./WithRoutes";
import * as yup from "yup";
import { useFormik } from "formik";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
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
  const initialPalette = props.palette[0].colors;
  console.log(initialPalette);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currColor, setColor] = React.useState("teal");
  const [color, setmoreColor] = React.useState(initialPalette);
  const [namePalette, setPaletteName] = React.useState("");
  const { palette } = props;
  const maxColor = 20;

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
                (p) =>
                  p.name.toLowerCase() !== val.toLowerCase() &&
                  color.length !== 0
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
      if (newPalette.colors.length !== 0) {
        props.savePalette(newPalette);
        props.nav("/");
      }
    },
  });
  console.warn(formik.errors);
  console.warn(formik1.errors);
  // console.log(color);

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
  const handleDelete = (colorHex) => {
    console.log("success in running");
    setmoreColor(color.filter((p) => p.color !== colorHex));
    // console.log(color);
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setmoreColor(arrayMove(color, oldIndex, newIndex));
  };
  const handleClearPalette = () => {
    setmoreColor([]);
  };
  const addRandomColor = () => {
    const allColor = props.palette.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColor.length);
    const randomColor = allColor[rand];
    setmoreColor([...color, randomColor]);
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
  const shouldDisable = color.length >= maxColor;
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
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearPalette}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={shouldDisable}
          >
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
            disabled={shouldDisable}
          >
            Add Color
          </Button>
        </form>

        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          color={color}
          handleDelete={handleDelete}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </Main>
    </Box>
  );
}

export default WithRoutes(NewPaletteForm);
