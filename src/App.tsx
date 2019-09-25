import Menu from "antd/es/menu";
import React, { Component } from "react";
import "./App.scss";

class App extends Component {

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
      <div className="App">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="name">
            Name
          </Menu.Item>
          <Menu.Item key="experience">
            Experience
          </Menu.Item>
          <Menu.Item key="projects">
            Projects
          </Menu.Item>
        </Menu>

      </div>
    );
  }
}

export default App;
