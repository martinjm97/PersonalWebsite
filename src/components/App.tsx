import { Icon, Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import ReactGA from "react-ga";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import ExperiencePage from "./ExperiencePage";
import HobbiesPage from "./HobbiesPage";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";

import "./App.scss";

// Set up Google Analytics
const trackingId = "UA-156016910-1";
ReactGA.initialize(trackingId);

const { Header, Content, Footer } = Layout;

class App extends Component {

  public handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  public render() {
    return (
      <div>
        {/* Set the head using Helmet */}
        <Helmet>
          <title>Jesse Michel's Personal Webite</title>
          <meta name="keywords" content="Jesse Michel, Jesse, Michel, MIT, Computer Science, Math, Programming Languages, Machine Learning" />
          <meta
            name="description"
            content="A brief overview of some of Jesse Michel's research, industry experience, projects, and hobbies. My research uses aspects of programming languages, machine learning, and math to build faster and more accurate ways of computing."
          />
          {/* Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156016910-1"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-156016910-1');
            `}
          </script>
          <meta name="google-site-verification" content="Q6HP24_lqZtn3xbiSsuQi0yPtsMTQxHuuhFxQ34FdJU" />
        </Helmet>

        {/* Set up all of the routing */}
        <Router>
          <Layout>
            <Header style={{position: "fixed", width: "100%"}}>
              <Menu onClick={this.handleClick} selectedKeys=
                    {[window.location.pathname === "/" ? "name" : window.location.pathname.split("/").join("")]}
                  mode="horizontal" className="Menu" style={{ lineHeight: "40px" }}>
                <Menu.Item key="name">
                  <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                </Menu.Item>
                <Menu.Item key="experience">
                  <Link to={`${process.env.PUBLIC_URL}/experience`}>Experience</Link>
                </Menu.Item>
                <Menu.Item key="projects">
                  <Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link>
                </Menu.Item>
                <Menu.Item key="hobbies">
                  <Link to={`${process.env.PUBLIC_URL}/hobbies`}>Hobbies</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{minHeight: "calc(100vh - 134px)" }}>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
              <Route path={`${process.env.PUBLIC_URL}/experience`} component={ExperiencePage} />
              <Route path={`${process.env.PUBLIC_URL}/projects`} component={ProjectsPage} />
              <Route path={`${process.env.PUBLIC_URL}/hobbies`} component={HobbiesPage} />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <span><a href="jmmichel@csail.mit.edu"><Icon type="mail" /></a></span>
              <span><a href="https://www.linkedin.com/in/jesse-michel-a5467693/"><Icon type="linkedin" /> </a></span>
              <p>© 2019 <a>Jesse Michel</a> and <a>Zack Holbrook</a></p>
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
