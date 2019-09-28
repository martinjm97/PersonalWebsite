// import Button from 'antd/es/button';
import Menu from "antd/es/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// import Icon from 'antd/es/icon';
import "./App.scss";
import ExperiencePage from "./ExperiencePage";
import NamePage from "./NamePage";
import ProjectsPage from "./ProjectsPage";

// const { SubMenu } = Menu;

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
        <Router>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="name">
              <Link to="/">Name</Link>
            </Menu.Item>
            <Menu.Item key="experience">
              <Link to="/experience">Experience</Link>
            </Menu.Item>
            <Menu.Item key="projects">
              <Link to="/projects">Projects</Link>
            </Menu.Item>
          </Menu>

          <Route exact path="/" component={NamePage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/projects" component={ProjectsPage} />
        </Router>
      </div>
    );
  }
}

export default App;
