import React, { Component } from "react";
import "./App.scss";

class ExperiencePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1>Industry Research</h1>
        <h2 className="experienceTitle"> ASAPP: Natural Language Processing Research Intern (2019)</h2>
        <img src={require('../images/asapp.jpg')} className="experienceImg" />
        <p className="projectText"> I worked to compress and accelerate the running of large language models such as BERT and Transformer-XL using various techniques such as distillation and quantization. Compressing such large and performant models reduces cost and increases accuracy.
        </p>
        <br></br>

        <h2 className="experienceTitle"> IBM: Research Intern (2018) </h2>
        <img src={require('../images/ibm.png')} className="experienceImg" />
        <p className="projectText"> A few other interns and I designed the Directed Random Geometric Graph, which has many desirable properties such as the small world property and a high clustering coefficient. Our research used tools from graph theory, combinatorics, and probability. We also applied our model successfully to real-world data.
        </p>
        <br></br>

        <h1>Software Engineering</h1>
        <h2 className="experienceTitle"> Microsoft: Software Engineering Intern (2018) </h2>
        <img src={require('../images/msft.png')} className="experienceImg" />
        <p className="projectText"> My project was to export artifacts and other model metadata to a PowerBI Dashboard for use by managers of data science teams. To do this, I wrote backend transpilation code in C# and modified the frontend using Angular. I also helped to improve artifact exporting with the AzureML Python SDK.
        </p>
        <br></br>

        <h2 className="experienceTitle">Google: Engineering Practicum Intern (2017) </h2>
        <img src={require('../images/google.jpg')} className="experienceImg" />
        <p className="projectText"> I worked in the Civics Team within Search. I wrote an object-oriented system in Python to produce a taxonomy of political information.
        I ran political Knowledge Panel experiments, adding knowledge panels to roughly 10% of Google of relevant queries. I also wrote MapReduce-style data pipelines C++ to create models of the news.
        </p>
        <br></br>

        <h2 className="experienceTitle">Microsoft: Machine Learning Intern (2017) </h2>
        <img src={require('../images/msft.png')} className="experienceImg" />
        <p className="projectText"> I used Tensorflow and CNTK deep learning infrastructures to implement LeNet on German traffic sign data (GTSRB) to compare performance, add a tutorial to CNTK, and discover bugs in CNTK.
        </p>
        <br></br>

        <h2 className="experienceTitle">QPID Health: Natural Language Processing Intern (2016) </h2>
        <img src={require('../images/qpid.png')} className="experienceImg" />
        <p className="projectText"> I implemented abbreviation/acronym expansion for clinical documents. I also implemented severity modifier attachment, meaning that I identified clinical and severity-related adjectives in a sentence. To achieve this, I designed annotation task, collected data, performed feature extraction, and trained models (e.g. logistic regression, random forests, and maxent).
        </p>
      </div>
    );
  }
}

export default ExperiencePage;
