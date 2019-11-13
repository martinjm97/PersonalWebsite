import React, { Component } from "react";
import "./App.scss";

class HobbiesPage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1>Hobbies</h1>
        <h2 className="hobbiesTitle">Dance</h2>
        <img src={require('../images/dance.jpg')} className="hobbiesImg" />
        <p> I've enjoyed dancing ballet and contemporary. I've danced on and off since I was 6 years old. At MIT, I danced with the MIT Dance Troupe and the MIT Dance Society.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="hobbiesTitle">Running</h2>
        <img src={require('../images/running.jpg')} className="hobbiesImg" />
        <p> Another long-term hobby of mine is long distance running. Some of the highlights of my running experiences were the Hyannis Marathon, which has a beautiful view of Cape Cod, and the local Cambridge Half Marathon.
        </p>
      </div>
      );
  }
}

export default HobbiesPage;
