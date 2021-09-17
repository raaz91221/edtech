import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class PushNotification extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    var options = {
      body: "New Coures Launched",
      icon: "https://i.pravatar.cc/150",
      dir: "ltr",
    };
    var notification = new Notification("Learn React JS", options);
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          color="secondary"
          block
          onClick={this.showNotification}
        >
          Click to Show Push Notification
        </Button>
      </div>
    );
  }
}

export default PushNotification;
