import React, { Component } from "react";
import "./App.scss";

class NamePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1 className="mainTitle">Jesse Michel</h1>
        <img src={require('../images/me_suite.jpg')} className="placeholderPortrait" />
        <p> I'm a masters student in the Programming Systems Group working with grad student, <a href="https://www.ben-sherman.net/" >Ben Sherman</a>, and supervised by Professor <a href="https://people.csail.mit.edu/mcarbin/">Michael Carbin</a> at MIT. My research uses aspects of programming languages, machine learning, systems, and math to build faster and more accurate ways of computing. Currently, my research focuses on ways to use automatic differentiation in order to improve the performance of exact real arithmetic.
        </p>

        <p> I received my Bachelor of Science in Pure Mathematics and Computer Science with a minor in Philosophy from MIT in 2019. A few of my favorite classes were Topology (18.901), Graduate Algorithms (6.854), and Philosophy of Religion (24.05).
        </p>

        <br></br>
        <h1>Research</h1>
        <h2 className="nameTitle">NAP: Noise-Based Sensitivity Analysis for Programs.</h2>
        <img src={require('../images/wax.png')} className="projectImg" />
        <p className="projectText"> Jesse Michel*, Sahil Verma*, Benjamin Sherman, Michael Carbin<br></br>
        Workshop on Approximate Computing Across the Stack 2019 (<a href="http://approximate.computer/wax2019/papers/michel.pdf">Paper</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle">Sound and Robust Solid Modeling via Exact Real Arithmetic and Continuity</h2>
        <img src={require('../images/icfp.png')} className="projectImg" />
        <p className="projectText"> Benjamin Sherman, Jesse Michel, Michael Carbin<br></br>
        Distinguished Paper Award -- International Conference on Functional Programming 2019 (<a href="https://doi.org/10.1145/3341703">Paper</a>)
        </p>
        <br></br>

        <h2 className="nameTitle">Directed Random Geometric Graphs </h2>
        <img src={require('../images/drgg.png')} className="projectImg" />
        <p className="projectText"> Jesse Michel, Sushruth Reddy, Rikhav Shah, Sandeep Silwal, Ramis Movassagh <br></br>
        Journal of Complex Networks 2019 (<a href="https://doi.org/10.1093/comnet/cnz006">Paper</a>)
        </p>

        <br></br><br></br><br></br>
        <h1>Teaching</h1>
        <h2 className="nameTitle">Signal Processing</h2>
        <img src={require('../images/6003.jpg')} className="projectImg" />
        <p className="projectText"> As an undergraduate teaching assistant, I worked under Adam Hartz and Dennis Freeman to help shape a changing version of Signal Processing with a focus on the Fourier transform, developing intuition, and builing computational skills. My duties involved helping students in office hours, grading, and discussing the course material in group meetings (<a href="https://sigproc.mit.edu/">Course</a>).
        </p>

        <h2 className="nameTitle">Fundamentals of Programming </h2>
        <img src={require('../images/6009.png')} className="projectImg" />
        <p className="projectText"> I was involved with this class for five semesters as an undergraduate working under Adam Hartz. I spent a semester as a student lab assistant and three semesters as a lab assistant. My core responsibility was to help students with their homework. In my semester as a teaching assistant, I enjoyed designing exam questions, tweaking the course website CatSoop, grading exams, and helping students in office hours (<a href="https://py.mit.edu/">Course</a>).
        </p>
      </div>
    );
  }
}

export default NamePage;
