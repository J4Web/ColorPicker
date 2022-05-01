import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as yup from "yup";
import { withStyles } from "@material-ui/core/styles";
import { WithRoutes } from "./WithRoutes";

import { Picker } from "emoji-mart";
import data from "@emoji-mart/data";
function EmojiPicker(props) {
  const ref = useRef();

  useEffect(() => {
    new Picker({ ...props, data, ref });
  }, []);

  return <div ref={ref} />;
}

const styles = {
  input: {
    width: "100%",
    border: "none",
    outline: "none",
    borderBottom: "1px solid #ccc",
    padding: "7px",
    fontSize: "1.4rem",
  },
  error: {
    display: "flex",
    color: "#ed4337",
    marginBottom: "2.8px",
  },
};
function PaletteMetaForm(props) {
  const [open, setOpen] = React.useState(props.isOpen);
  const [openEmoji, setEmoji] = React.useState(false);

  const { color, palette, namePalette, setPaletteName, classes, handleClose } =
    props;
  let emojiUse = "";

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
        emoji: emojiUse,
      };
      console.error(newPalette);
      if (newPalette.colors.length !== 0) {
        props.savePalette(newPalette);
        props.nav("/");
      }
    },
  });
  console.warn(formik1.errors);
  const handleNextStep = () => {
    setOpen(false);
    setEmoji(true);
  };
  const handleSelectEmoji = (emoji) => {
    emojiUse = emoji.native;
    console.log(emoji.native);
    formik1.handleSubmit();
  };
  const closeEmoji = () => {
    setEmoji(false);
  };

  return (
    <div>
      <Dialog open={openEmoji} onClose={closeEmoji}>
        <DialogTitle>Pick a Palette Emoji...</DialogTitle>
        <EmojiPicker onEmojiSelect={handleSelectEmoji} />
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>
              Please select a name for your beautiful palette. Must be sure it's
              unique!
            </DialogContentText>

            <input
              className={classes.input}
              type="text"
              id="namePalette"
              name="namePalette"
              value={formik1.values.namePalette}
              onChange={formik1.handleChange}
            />
            {formik1.errors.namePalette ? (
              <span className={classes.error}>
                {formik1.errors.namePalette}
              </span>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextStep}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(WithRoutes(PaletteMetaForm));
