import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import { WithRoutes } from "./WithRoutes";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@mui/material/Dialog";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { blue } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles/PaletteList.js";
class PaletteList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      delId: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleClick(id) {
    const { nav } = this.props;
    console.log(nav, id);
    nav(`/palette/${id}`);
  }
  openDialog(id) {
    // e.stopPropagation();
    this.setState({ openDeleteDialog: true, delId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, delId: "" });
  }
  handleDelete() {
    this.props.delPalette(this.state.delId);
    this.closeDialog();
  }
  render() {
    const { classes } = this.props;

    // console.log(this.props);
    return (
      <motion.div
        className={classes.root}
        onClick={this.closeDialog}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: window.innerWidth, transition: { duration: 0.26 } }}
      >
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link className={classes.link} to="/palette/new">
              Create A Palette
            </Link>
          </nav>

          <TransitionGroup
            className={classes.palettes}
            onClose={this.closeDialog}
            key={uuidv4()}
          >
            {this.props.palette?.map((item) => {
              return (
                <CSSTransition key={uuidv4()} classNames="fade" timeout={300}>
                  <MiniPalette
                    delPalette={this.props.delPalette}
                    {...item}
                    handlePath={this.handleClick}
                    openDialog={this.openDialog}
                    key={uuidv4()}
                    id={item.id}
                    palette={this.props.palette}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </div>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" onClick={this.handleDelete} />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" onClick={this.closeDialog} />
            </ListItem>
          </List>
        </Dialog>
      </motion.div>
    );
  }
}
// const export WithRoutes(PaletteList)
// export default withStyles(styles)(PaletteList);
// export default WithRoutes(withStyles(styles)(PaletteList));
// export const PaletteListComponent = WithRoutes(WithStyles(PaletteList));
// export const PaletteListComponent = WithRoutes(WithStyles(styles)(PaletteList));

export default WithRoutes(withStyles(styles)(PaletteList));
