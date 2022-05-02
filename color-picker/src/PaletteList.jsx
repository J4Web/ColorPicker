import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import { WithRoutes } from "./WithRoutes";

import styles from "./styles/PaletteList.js";
class PaletteList extends Component {
  constructor(props) {
    super(props);
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
            <Link to="/palette/new">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {this.props.palette?.map((item) => {
              return (
                <MiniPalette
                  delPalette={this.props.delPalette}
                  {...item}
                  handlePath={() => this.handleClick(item.id)}
                  key={item.id}
                  id={item.id}
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
