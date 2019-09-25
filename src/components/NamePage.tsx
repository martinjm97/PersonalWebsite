import React, { Component } from 'react';
import './NamePage.scss';

class NamePage extends Component {

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
      <div className="NamePage">
      Hello World
      </div>
    );
  }
}

export default NamePage;