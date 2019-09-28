import { Layout } from "antd";
import Menu from "antd/es/menu";
import React, { Component } from "react";
import NamePage from "./NamePage";

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
      <Layout>
      <Header>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}
            mode="horizontal" className="Menu" style={{ lineHeight: "64px" }}>
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
      </Header>
      <Content style={{minHeight: "calc(100vh - 134px)" }}>
        <NamePage />
      </Content>
      <Footer style={{ textAlign: "center" }}>Say some things in the footer</Footer>
    </Layout>
    );
  }
}

export default App;
