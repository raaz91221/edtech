import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "../Layout/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Button, Box } from "@material-ui/core";
import CourseProgress from "./CourseProgress";
import Arrows from "../../assets/images/Arrows.svg";
import Spanish from "../../assets/images/Spanish.svg";

function MyCourse({
  name,
  author,
  icon,
  progress,
  btnName,
  handleClick,
  ...props
}) {
  return (
    <Fragment>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar variant="square" style={{ background: "white" }}>
                      <img src={Spanish} alt="icon" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={name} secondary={`by ${author}`} />
                </ListItem>
              </List>
              <div style={{ width: "200px" }}>
                <CourseProgress value={progress} />
              </div>
              <div style={{ marginRight: "20px" }}>
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
            </div>
          </Card>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "5px" }}>
              <img src={Arrows} alt="arrow" />
            </div>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
MyCourse.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  btnName: PropTypes.string,
  handleClick: PropTypes.func,
};
MyCourse.defaultProps = {
  btnName: "Continue",
};

export default MyCourse;
