import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  picker: {
    width: "100% !important",
    paddingBottom: "10px",
    marginTop: "2rem",
  },

  addColor: {
    width: "100%",
    padding: "0.3.2rem!important",
    marginTop: "1rem",
    fontSize: "1.3rem!important",
  },
  input: {
    width: "100%",
    border: "none",
    marginBottom: "10px",
    marginTop: "15px",
    outline: "none",
    borderBottom: "1px solid #000",
    padding: "10px",
    // marginLeft: "18px",
    backgroundColor: "rgba(128, 128, 128,0.3)",
  },
  error: {
    display: "flex",
    color: "#ed4337",
    marginTop: "-9px",
    marginBottom: "2.8px",
  },
  btns: {
    width: "100%",
  },
  btn: {
    width: "50%",
  },
};
function ColorPickerForm(props) {
  const {
    color,
    currColor,
    handleClearPalette,
    setmoreColor,
    classes,
    addRandomColor,
    shouldDisable,
    updateColor,
  } = props;
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
  return (
    <div className={classes.root}>
      <div className={classes.btns}>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={handleClearPalette}
        >
          Clear Palette
        </Button>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={addRandomColor}
          disabled={shouldDisable}
        >
          {shouldDisable ? "Palette Full" : "Random Color"}
        </Button>
      </div>
      <ChromePicker
        className={classes.picker}
        color={currColor}
        onChangeComplete={updateColor}
      />
      <form onSubmit={formik.handleSubmit}>
        <input
          className={classes.input}
          autocomplete="off"
          type="text"
          id="newName"
          placeholder="Color Name..."
          onChange={formik.handleChange}
        />
        {formik.errors.newName ? (
          <p className={classes.error}>{formik.errors.newName}</p>
        ) : null}
        <Button
          className={classes.addColor}
          variant="contained"
          color="primary"
          type="submit"
          style={{ background: `${currColor}` }}
          disabled={shouldDisable}
        >
          {shouldDisable ? "Palette Full" : "Add Color"}
        </Button>
      </form>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
