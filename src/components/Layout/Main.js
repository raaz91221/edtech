import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

function Main({ backgroundColor, ...props }) {
  return (
    <Fragment>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,  backgroundColor: backgroundColor }}
        style={{height:'100vh'}}
      >
        {props.children}
      </Box>
    </Fragment>
  );
}
Main.propTypes = {
  backgroundColor: PropTypes.string,
};
Main.defaultProps = {
  backgroundColor: "#FFFFFF",
};

export default Main;
