import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Figma from "../../assets/images/Figma.svg";
import Photography from "../../assets/images/Photography.svg";
import Insta from "../../assets/images/Insta.svg";
import Drawing from "../../assets/images/Drawing.svg";
import Photoshop from "../../assets/images/Photoshop.svg";
import CourseCard from "../Courses/CourseCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CourseTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    alert("Clicked!");
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="default"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Courses Tab"
      >
        <Tab label="All Courses" {...a11yProps(0)} />
        <Tab label="The Newest" {...a11yProps(1)} />
        <Tab label="Top Rated" {...a11yProps(2)} />
        <Tab label="Most Popular" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <CourseCard
          name="Learn Figma"
          icon={Figma}
          author="Christopher Morgan"
          duration="6h 30min"
          rating="4,9"
          handleClick={handleClick}
        />
        <CourseCard
          name="Analog Photography"
          icon={Photography}
          author="Gordon Norman"
          duration="3h 15min"
          rating="4,7"
          handleClick={handleClick}
        />
        <CourseCard
          name="Master in Instagram"
          icon={Insta}
          author="Sophie Gill"
          duration="7h 40min"
          rating="4,6"
          handleClick={handleClick}
        />
        <CourseCard
          name="Basic of Drawing"
          icon={Drawing}
          author="Jean Tate"
          duration="8h 30min"
          rating="4,8"
          handleClick={handleClick}
        />

        <CourseCard
          name="Photoshop Essence"
          icon={Photoshop}
          author="David Green"
          duration="5h 35min"
          rating="4,7"
          handleClick={handleClick}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CourseCard
          name="Master in Instagram"
          icon={Insta}
          author="Sophie Gill"
          duration="7h 40min"
          rating="4,6"
          handleClick={handleClick}
        />
        <CourseCard
          name="Basic of Drawing"
          icon={Drawing}
          author="Jean Tate"
          duration="8h 30min"
          rating="4,8"
          handleClick={handleClick}
        />

        <CourseCard
          name="Photoshop Essence"
          icon={Photoshop}
          author="David Green"
          duration="5h 35min"
          rating="4,7"
          handleClick={handleClick}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CourseCard
          name="Learn Figma"
          icon={Figma}
          author="Christopher Morgan"
          duration="6h 30min"
          rating="4,9"
          handleClick={handleClick}
        />
        <CourseCard
          name="Analog Photography"
          icon={Photography}
          author="Gordon Norman"
          duration="3h 15min"
          rating="4,7"
          handleClick={handleClick}
        />

        <CourseCard
          name="Basic of Drawing"
          icon={Drawing}
          author="Jean Tate"
          duration="8h 30min"
          rating="4,8"
          handleClick={handleClick}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CourseCard
          name="Analog Photography"
          icon={Photography}
          author="Gordon Norman"
          duration="3h 15min"
          rating="4,7"
          handleClick={handleClick}
        />
        <CourseCard
          name="Master in Instagram"
          icon={Insta}
          author="Sophie Gill"
          duration="7h 40min"
          rating="4,6"
          handleClick={handleClick}
        />
        <CourseCard
          name="Basic of Drawing"
          icon={Drawing}
          author="Jean Tate"
          duration="8h 30min"
          rating="4,8"
          handleClick={handleClick}
        />
      </TabPanel>
    </div>
  );
}
