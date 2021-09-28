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
import GitHubIcon from '@material-ui/icons/GitHub';


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
                  href="/"
                >
                  <img
                    src="images/navbar_logo_initials.png"
                    alt="CAITLIN_RICH"
                  />
                </Button>

                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                //  href="/resume"
                >
                  {"Resume"}
                </Button>

                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                 // href="/projects"
                >
                  {"Projects"}
                </Button>

                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                 // href="/contact"
                >
                  <MailOutlineIcon />
                </Button>
              
                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                  href="https://www.linkedin.com/in/caitlinrich/"
                >
                  <LinkedInIcon />
                </Button>

                <Button
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={styles.title}
                  href="https://github.com/caitlin-rich/"
                >
                  <GitHubIcon />
                </Button>
              
              </Toolbar>
            </AppBar>
          </div>
        </nav>
      </>
    );
  }
}
