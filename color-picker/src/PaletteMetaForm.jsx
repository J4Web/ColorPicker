import React from "react";
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

  const handleClose = () => {
    setOpen(false);
  };
  const { color, palette, namePalette, setPaletteName, classes } = props;

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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <form onSubmit={formik1.handleSubmit}>
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
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(WithRoutes(PaletteMetaForm));
