import React, { Component } from "react";
import "./App.scss";
import MathJax from "react-mathjax";

class HomePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1 className="mainTitle">Jesse Michel</h1>
        <img src={require("../images/me_suite.jpg")} className="placeholderPortrait" />
        <p> I am a PhD student in the Programming Systems Group at MIT advised by Professor <a href="https://people.csail.mit.edu/mcarbin/">Michael Carbin</a> and funded by the Ashar Aziz Presidential Fellowship. My research uses programming language semantics with machine learning to build uniquely expressive learned systems.
        </p>

        <p> I received my Master's of Engineering in Electrical Engineering and Computer Science from MIT in 2020 with a thesis titled <i>Sensitivities for Guiding Refinement in Arbitrary-Precision Arithmetic</i>,
        where I used derivatives of interval code to build an algorithm for guiding precision refinement. I completed my undergraduate at MIT in 2019, with a BS in Pure Mathematics and Computer Science with a minor in Philosophy.
        A few of my favorite classes were Topology, Graduate Algorithms, and Philosophy of Religion.
        As an undergraduate, I competed in hackathons -- winning first overall at HackMIT 2017 and 2018,
        conducted research and presented my work including winning the PLDI undergraduate student research
        competition, and worked at companies such as IBM Research, Google, and Microsoft.
        </p>

        <br></br>
        <h1>Research</h1>
        <h2 className="nameTitle">Systematically Differentiating Parametric Discontinuities</h2>
        <img src={require("../images/teg_icon.png")} className="projectImg" />
        <p className="projectText"> Sai Praveen Bangaru*, Jesse Michel*, Kevin Mu, Gilbert Bernstein, Tzu-Mao Li, Jonathan Ragan-Kelley<br></br>
        SIGGRAPH 2021 (<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/teg-2021.pdf">Paper</a>)(<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/">Website</a>)
        </p>
        <br></br><br></br>

        <MathJax.Provider>
          <h2 className="nameTitle"><MathJax.Node inline formula={'\\lambda_S'} />: Computable semantics for differentiable programming
with higher-order functions and datatypes</h2>
        </MathJax.Provider>
        <img src={require("../images/diff_prob.png")} className="projectImg" />
        <p className="projectText"> Benjamin Sherman, Jesse Michel, Michael Carbin<br></br>
        Principles of Programming Languages 2020 (<a href="https://dl.acm.org/doi/10.1145/3434284">Paper</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle">NAP: Noise-Based Sensitivity Analysis for Programs</h2>
        <img src={require("../images/wax.png")} className="projectImg" />
        <p className="projectText"> Jesse Michel*, Sahil Verma*, Benjamin Sherman, Michael Carbin<br></br>
        Workshop on Approximate Computing Across the Stack (WAX) 2019 (<a href="http://approximate.computer/wax2019/papers/michel.pdf">Summary</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle">Sound and Robust Solid Modeling via Exact Real Arithmetic and Continuity</h2>
        <img src={require("../images/icfp.png")} className="projectImg" />
        <p className="projectText"> Benjamin Sherman, Jesse Michel, Michael Carbin<br></br>
        Distinguished Paper Award -- International Conference on Functional Programming 2019 (<a href="https://doi.org/10.1145/3341703">Paper</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle">Directed Random Geometric Graphs </h2>
        <img src={require("../images/drgg.png")} className="projectImg" />
        <p className="projectText"> Jesse Michel*, Sushruth Reddy*, Rikhav Shah*, Sandeep Silwal*, Ramis Movassagh <br></br>
        Journal of Complex Networks 2019 (<a href="https://doi.org/10.1093/comnet/cnz006">Paper</a>)
        </p>

        <br></br><br></br><br></br>
        <h1>Teaching</h1>
        <h2 className="nameTitle">Signal Processing</h2>
        <img src={require("../images/6003.jpg")} className="projectImg" />
        <p className="projectText"> As an undergraduate teaching assistant,
        I worked under Adam Hartz and Dennis Freeman.
        My duties involved helping students in office hours, grading,
        and discussing the course materials in group meetings (<a href="https://sigproc.mit.edu/">Course</a>).
        </p>
        <br></br>

        <h2 className="nameTitle">Fundamentals of Programming </h2>
        <img src={require("../images/6009.png")} className="projectImg" />
        <p className="projectText"> I spent five semesters involved with this class working under Adam Hartz.
        I spent a semester as a student lab assistant,
        three semesters as a lab assistant, and a semester as a teaching assistant.
        I designed exam questions, improved the course website CatSoop, graded exams,
        and helped students in office hours (<a href="https://py.mit.edu/">Course</a>).
        </p>
      </div>
    );
  }
}

export default HomePage;
