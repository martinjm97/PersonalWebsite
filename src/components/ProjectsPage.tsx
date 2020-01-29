import React, { Component } from "react";
import "./App.scss";

class ProjectPage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1>Projects</h1>
        <h2 className="projectTitle"> 1DB: One database to rule them all</h2>
        <img src={require("../images/1db.jpg")} className="projectImg" />
        <p className="projectText"> 1DB is a simple database auto-selector
        that makes the decision of whether to use Druid or MySQL.
        We set up a metaschema for data,
        meaning that we accept queries and then direct them to the appropriate database.
        The vision is to create a high-level schema for incoming data.
        <br></br><br></br>
        Awards: Best Use of Nasdaq/Quandl Datasets, Kensho Data Usability Challenge (<a href="https://devpost.com/software/1db">Devpost</a>).
        </p>
        <br></br>

        <h2 className="projectTitle"> Ennui ~ an elegant neural network user interface ~</h2>
        <img src={require("../images/ennui.png")} className="projectImg" />
        <p className="projectText"> Ennui is a drag-and-drop user-interface designed
        for building and experimenting with neural network architectures.
        It provides real-time visualizations as the network is training,
        has detailed descriptions of various properties of deep neural networks,
        and has handy features like automatic code generation and link sharing
        (<a href="https://math.mit.edu/ennui/">Website</a>)(<a href="https://github.com/martinjm97/ENNUI">GitHub</a>).
        <br></br><br></br>
        Awards: 1st Place at HackMIT 2018, Best Use of Deep Neural Networks (<a href="https://thetech.com/2018/09/17/hack-mit-2018">Article</a>) (<a href="https://devpost.com/software/ennui">Devpost</a>).
        </p>
        <br></br>
        <h2 className="projectTitle"> Tap: Typed Argument Parser</h2>
        <img src={require("../images/tap.jpg")} className="projectImg" />
        <p className="projectText"> Tap is a typed modernization of Python's argparse library.
        Tap provides the following benefits: static type checking, code completion, and source code navigation.
        It also includes useful experiment-tracking features (<a href="https://github.com/swansonk14/typed-argument-parser">GitHub</a>).
        </p>
        <br></br><br></br>

        <h2 className="projectTitle"> Pixelator</h2>
        <img src={require("../images/pixelator.png")} className="projectImg" />
        <p className="projectText"> We designed an algorithm that sharpens blurry images
        using a nonlinear machine learning free approach.
        We used it to enhance low-resolution images and
        found that it improved IBM Watson's classification accuracy for people.
        <br></br><br></br><br></br><br></br>
        Awards: 1st Place at HackMIT 2017, Most Innovative Use of IBM Tech (<a href="https://thetech.com/2018/09/17/hack-mit-2017">Article</a>) (<a href="https://devpost.com/software/pixelator">Devpost</a>).
        </p>
      </div>
    );
  }
}

export default ProjectPage;
