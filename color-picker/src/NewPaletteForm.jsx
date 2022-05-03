import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import { withStyles } from "@material-ui/core/styles";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";
import { DrawerHeader, Main, styles } from "./styles/NewPaletteFormStyles";
const drawerWidth = 400;
function NewPaletteForm(props) {
  const initialPalette = props.palette[0]?.colors;
  console.log(initialPalette);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currColor, setColor] = React.useState("#e56d");
  const [color, setmoreColor] = React.useState(initialPalette);
  const [namePalette, setPaletteName] = React.useState("");

  const { palette, classes } = props;
  const maxColor = 20;

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
    let rand;
    // let randomColor = allColor[rand];
    let isDuplicate = true;
    while (isDuplicate) {
      rand = Math.floor(Math.random() * allColor.length);
      const randomColor = allColor[rand];
      isDuplicate = color.some((c) => c.name === randomColor.name);
      console.log("isDuplicate", isDuplicate);
      console.log("color itself", randomColor);
      if (!isDuplicate) {
        setmoreColor([...color, randomColor]);
      }
    }
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
      <PaletteFormNav
        handleDrawerOpen={handleDrawerOpen}
        color={color}
        palette={palette}
        setmoreColor={setmoreColor}
        savePalette={props.savePalette}
        namePalette={namePalette}
        setPaletteName={setPaletteName}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          display: "flex",
          alignItems: "center",
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
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <ColorPickerForm
            color={color}
            currColor={currColor}
            setmoreColor={setmoreColor}
            handleClearPalette={handleClearPalette}
            addRandomColor={addRandomColor}
            shouldDisable={shouldDisable}
            updateColor={updateColor}
          />
        </div>
        {/* <Divider /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          color={color}
          handleDelete={handleDelete}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </Main>
    </Box>
  );
}

export default withStyles(styles)(NewPaletteForm);
