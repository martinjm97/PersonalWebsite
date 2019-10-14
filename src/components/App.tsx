import { Icon, Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import ExperiencePage from "./ExperiencePage";
import NamePage from "./NamePage";
import ProjectsPage from "./ProjectsPage";

import "./App.scss";

const { Header, Content, Footer } = Layout;

class App extends Component {

  public handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  public render() {
    return (
      <Router>
        <Layout>
          <Header style={{position: "fixed", width: "100%"}}>
            <Menu onClick={this.handleClick} selectedKeys=
                  {[window.location.pathname === "/" ? "name" : window.location.pathname.split("/").join("")]}
                mode="horizontal" className="Menu" style={{ lineHeight: "40px" }}>
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
          <Footer style={{ textAlign: "center" }}>
            <span><a href="email@mail.com"><Icon type="mail" /> email@mail.com</a></span>
            <span><a href="linkedin.com/name"><Icon type="linkedin" /> linkedin.com/name</a></span>
            <p>© 2019 <a>Jesse Michel</a> and <a>Zack Holbrook</a></p>
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
