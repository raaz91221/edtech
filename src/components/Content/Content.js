import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "../Layout/Card";
import SearchBar from "../Search/SearchBar";
import Notification from "../Notification/Notification";
import ProfileMenu from "../Profile/ProfileMenu";
import Typography from "@material-ui/core/Typography";
import Illustration from "../../assets/images/Illustration.svg";
import MyCourse from "../Courses/MyCourse";
import CourseTab from "../Courses/CourseTab";
import StatisticsTab from "../Statistics/StatisticsTab";
import PremiumCourse from "../Courses/PremiumCourse";
import PremiumCourseIcon from "../../assets/images/book.svg";
import PushNotification from "../Notification/PushNotification";

const handleClick = () => {
  alert("Premium Course Clicked!");
};

function Content({ backgroundColor, ...props }) {
  return (
    <div className="content-area"
     
    >
      <Grid container spacing={2}>
        <Grid item md={7}>
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={7} md={8}>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  flexDirection="column"
                  style={{ marginTop: "25px" }}
                >
                  <Typography variant="h4" component="div">
                    <b>Hello Josh!</b>
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    It's good to see you again.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5} md={4}>
                <div>
                  <img
                    src={Illustration}
                    alt="illustration"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      height: "150px",
                      marginTop: "-30px",
                      position: "relative",
                      Zindex: 99999,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={5}>
          <Grid container spacing={2}>
            <Grid item xs={8} md={9}>
              <SearchBar />
            </Grid>
            <Grid item xs={4} md={3}>
              <Box display="flex">
                <Notification count="1" />
                <ProfileMenu />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={6} md={6}>
              <Card>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Typography variant="h3" component="div">
                    11
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    Courses Completed
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={6}>
              <Card>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Typography variant="h3" component="div">
                    4
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    Courses in Progress
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <MyCourse
            name="Spanish B2"
            icon=""
            author="Alejandro Velazquez"
            progress="83"
          />
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            style={{ marginTop: "30px", textAlign: "left" }}
          >
            Courses
          </Typography>

          <CourseTab />
        </Grid>
        <Grid item md={5}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            style={{ marginTop: "30px", textAlign: "left" }}
          >
            Statistics
          </Typography>
          <StatisticsTab />
          <br></br>
          <PremiumCourse
            title="Learn even more!"
            desc="Unlock premium features only for $9.99 per month"
            icon={PremiumCourseIcon}
            handleClick={handleClick}
          />

          <PushNotification />
        </Grid>
      </Grid>
    </div>
  );
}
Content.propTypes = {
  backgroundColor: PropTypes.string,
};
Content.defaultProps = {
  backgroundColor: "#FFFFFF",
};

export default Content;
