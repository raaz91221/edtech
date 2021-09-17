import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import NotificationIcon from "@material-ui/icons/NotificationsActive";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginRight:theme.spacing(3),
    },
  },
}));

export default function Notification({ count, handleClick, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={handleClick}>
      <Badge badgeContent={count} color="secondary" >
        <NotificationIcon />
      </Badge>
    </div>
  );
}
Notification.propTypes = {
  count: PropTypes.number,
  handleClick: PropTypes.func,
};
