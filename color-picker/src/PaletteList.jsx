import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import { WithRoutes } from "./WithRoutes";

const styles = {
  root: {
    backgroundColor: "teal",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flex: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};
class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    const { nav } = this.props;
    console.log(nav, id);
    nav(`/palette/${id}`);
  }
  render() {
    const { classes } = this.props;

    // console.log(this.props);
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {this.props.palette?.map((item) => {
              return (
                <MiniPalette
                  {...item}
                  handlePath={() => this.handleClick(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
// const export WithRoutes(PaletteList)
// export default withStyles(styles)(PaletteList);
// export default WithRoutes(withStyles(styles)(PaletteList));
// export const PaletteListComponent = WithRoutes(WithStyles(PaletteList));
// export const PaletteListComponent = WithRoutes(WithStyles(styles)(PaletteList));

export default WithRoutes(withStyles(styles)(PaletteList));
