import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "../Layout/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Grid, Button } from "@material-ui/core";

function CourseCard({
  name,
  author,
  icon,
  duration,
  rating,
  btnName,
  handleClick,
  ...props
}) {
  return (
    <Fragment>
      <Card margin="8px 0">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <List style={{ minWidth: "240px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="square" style={{ background: "white" }}>
                  <img src={icon} alt={name} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={`by ${author}`} />
            </ListItem>
          </List>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WatchLaterIcon />
            {duration}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WhatshotIcon />
            {rating}
          </div>
          <Button variant="outlined" onClick={handleClick}>
            {btnName}
          </Button>
        </Grid>
      </Card>
    </Fragment>
  );
}
CourseCard.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  icon: PropTypes.string,
  duration: PropTypes.string,
  rating: PropTypes.string,
  btnName: PropTypes.string,
  handleClick: PropTypes.func,
};
CourseCard.defaultProps = {
  btnName: "View Course",
};

export default CourseCard;
