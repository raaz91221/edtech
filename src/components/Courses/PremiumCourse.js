import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "../Layout/Card";
import Typography from "@material-ui/core/Typography";
import { Button, Box } from "@material-ui/core";

function PremiumCourse({ title, desc, icon, btnName, handleClick, ...props }) {
  return (
    <Fragment>
      <Card>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:"20px",
          }}
        >
          <div>
            <Typography variant="h5" gutterBottom component="div">
              <b>{title}</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div" sty>
              {desc}
            </Typography>
            <Button
              onClick={handleClick}
              style={{
                background: "#0C0B0B",
                color: "#EFEFEF",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              {btnName}
            </Button>
          </div>
          <div style={{ marginRight: "20px" }}>
            <img src={icon} alt="premium course" />
          </div>
        </Box>
      </Card>
    </Fragment>
  );
}
PremiumCourse.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.string,
  btnName: PropTypes.string,
  handleClick: PropTypes.func,
};
PremiumCourse.defaultProps = {
  btnName: "Go Premium",
};

export default PremiumCourse;
