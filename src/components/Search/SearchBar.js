import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    backgroundColor: "#F5F5F7",
    borderRadius: "14px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  iconButton: {
    padding: 8,
    color: "#0C0B0B",
  },
}));

export default function SerachBar() {
  const classes = useStyles();

  return (
    <Paper component="form" elevation="0" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
