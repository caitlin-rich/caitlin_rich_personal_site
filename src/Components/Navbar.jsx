import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Button, Tooltip, Grid, Typography } from "@mui/material";
import { MailOutline, LinkedIn, GitHub } from "@mui/icons-material";
import {AppBar as MuiAppBar} from "@mui/material";


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

    //I don't think this does what it says it does
    const handleClick = () => navigator.clipboard.writeText("caitlinboagrich@gmail.com")

    return (
      <>
        <nav>
          <div id="navbar">
            <Grid>
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
                    <Typography>CAITLIN RICH</Typography>
                  </Button>

                  <Button
                    variant="h6"
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    href="https://www.linkedin.com/in/caitlinrich/"
                  >
                    <LinkedIn />
                  </Button>

                  <Button
                    variant="h6"
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    href="https://github.com/caitlin-rich/"
                  >
                    <GitHub />
                  </Button>

                  <Tooltip title="Click to copy email address">
                    <Button
                      variant="h6"
                      underline="none"
                      color="inherit"
                      className={styles.title}
                      onClick={handleClick}
                    >
                      <MailOutline/>
                      <Typography sx={{ml: 1}}>caitlinboagrich@gmail.com</Typography>
                      
                    </Button>
                  </Tooltip>

                </Toolbar>
              </AppBar>
            </Grid>
          </div>
        </nav>
      </>
    );
  }
}