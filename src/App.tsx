import React, { Component } from 'react';
import Button from 'antd/es/button';
import Menu from 'antd/es/menu';
import Icon from 'antd/es/icon';
import './App.css';

const { SubMenu } = Menu;

class App extends Component {
  
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
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