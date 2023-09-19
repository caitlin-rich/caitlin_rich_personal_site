import React from "react";
import { Link } from "react-router-dom";
//Imported UI elements:
import Box from "@material-ui/core/Box";


export default function Home() {
  return (
    <Box m={-10} mt={63} textAlign="center">
      <Link to="/">
        <img src="images/personal_site_rainbow_glitch_banner_nologos.png" alt="banner" width="100%"/>
      </Link>
      <h3>This is a test to see if this is still hooked up correctly.</h3>
      <h3>I can be reached at caitlinboagrich@gmail.com.</h3>
      <a href="https://www.linkedin.com/in/caitlinrich/">LinkedIn</a>
      <br />
      <a href="https://github.com/caitlin-rich">GitHub</a>
    </Box>
  );
}
