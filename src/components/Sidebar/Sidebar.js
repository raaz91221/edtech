import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SchoolIcon from "@material-ui/icons/School";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import PersonIcon from "@material-ui/icons/Person";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EmailIcon from "@material-ui/icons/Email";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "none",
      boxShadow: "none",
      marginBottom: "-30px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#0C0B0B",

    [theme.breakpoints.up("sm")]: {
      margin: "20px",
      borderRadius: "15px",
      height:'96vh',
      boxShadow:'15px 5px 10px #CCC'
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <Hidden smUp implementation="css">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon
            style={{
              fill: "#FFFFFF",
              padding: "21px",
              color: "white !important",
            }}
          />
        </IconButton>
      </Hidden>

      <Divider />
      <List className="my-sidebar">
        <Typography
          variant="h3"
          gutterbottom
          component="div"
          style={{ color: "white", marginBottom: "20px", textAlign:'center' }}
        >
          <b style={{ color: "white", marginBottom: "100px" }}>F.</b>
        </Typography>

        <ListItem button className="sidebar-item">
          <ListItemIcon className="sidebar-icon">
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon className="sidebar-icon">
            <SchoolOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon className="sidebar-icon">
            <PersonOutlineOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon className="sidebar-icon">
            <EmailOutlinedIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon className="sidebar-icon">
            <SettingsOutlinedIcon />
          </ListItemIcon>
        </ListItem>

        <ListItem button className="sidebar-item">
          <ListItemIcon
            className="sidebar-icon"
            style={{ position: "relative", top: "100px" }}
          >
            <ExitToAppOutlinedIcon />
          </ListItemIcon>
        </ListItem>
      </List>

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="sidebar">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
