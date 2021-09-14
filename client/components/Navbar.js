import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import MuiAppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props} />;
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
    },
  },
});

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,

  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

export default class Navbar extends React.Component {
  render() {
    const { classes } = styles;
    return (
      <>
        <nav>
          <div id="navbar">
            <AppBar position="fixed">
              <Toolbar className={styles.toolbar}>
                <div className={styles.left} />
                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                >
                  <img
                    src="images/name_logo_glitch__white_transparent.png"
                    alt="CAITLIN_RICH"
                  />
                </Button>
                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                >
                  {"Resume"}
                </Button>
                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                >
                  {"Projects"}
                </Button>
                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                >
                  <MailOutlineIcon />
                </Button>
                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                >
                  <LinkedInIcon />
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </nav>
      </>
    );
  }
}
