import { Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import ExperiencePage from "./ExperiencePage";
import NamePage from "./NamePage";
import ProjectsPage from "./ProjectsPage";

import "./App.scss";

const { Header, Content, Footer } = Layout;

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
      <Router>
        <Layout>
          <Header>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
                mode="horizontal" className="Menu" style={{ lineHeight: "64px" }}>
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
          </Header>
          <Content style={{minHeight: "calc(100vh - 134px)" }}>
            <Route exact path="/" component={NamePage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/projects" component={ProjectsPage} />
          </Content>
          <Footer style={{ textAlign: "center" }}>Say some things in the footer</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
