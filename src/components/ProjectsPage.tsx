import React, { Component } from "react";
import "./NamePage.scss";

class NamePage extends Component {

  public state = {
    current: "mail",
  };

  public handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  }

  public render() {
    return (
      <div className="NamePage">
      Project World
      </div>
    );
  }
}

export default NamePage;
