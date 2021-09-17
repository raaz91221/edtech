import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex" >
      <CircularProgress variant="determinate" {...props} style={{color:'#0C0B0B', width:'60px', height:'60px',display:'inline-flex', justifyContent:'center'}} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div>{`${Math.round(props.value)}%`}</div>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CourseProgress({ value, ...props }) {
  return <CircularProgressWithLabel value={value} />;
}
CourseProgress.propTypes = {
  value: PropTypes.number.isRequired,
};
