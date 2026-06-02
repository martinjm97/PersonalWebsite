import React, { Component } from "react";
import "./App.scss";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

class HomePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1 className="mainTitle">Jesse Michel</h1>
        <img src={require("../images/jesse_michel_headshot_2023.jpeg")} className="placeholderPortrait" />
        <p>
          I am a PhD student in the Programming Systems Group at MIT advised by Professor <a href="https://people.csail.mit.edu/mcarbin/">Michael Carbin</a>. My research focuses on problems in computer graphics, physical simulation, and scientific computing. I approach these problems by designing programming languages with expressive primitives such as integration and with support for automatic differentiation.
        </p>

        <p>
          I completed my undergraduate at MIT in 2019 with a BS in Pure Mathematics and Computer Science with a minor in Philosophy. I completed my MEng at MIT studying automatic differentiation of arbitrary-precision arithmetic for performance.
          {/* A few of my favorite classes were Topology, Graduate Algorithms, Algorithms for Inference, and Philosophy of Religion. */}
        </p>

        <p>
          I've enjoyed my time interning in industry at companies working on network theory at IBM Research, LLMs at ASAPP Research, search at Google, and machine learning in the cloud at Microsoft.
          I enjoy maintaining a <a href="https://github.com/swansonk14/typed-argument-parser">typed argument parser</a> with my friend <a href="https://swansonkyle.com">Kyle</a> and a wonderful community of open-source contributors. The library has been used widely in the machine learning community and has been downloaded millions of times.
        </p>

        <br></br>
        <h1>Research</h1>
        <h2 className="nameTitle">Impulse: Momentously Fast, General, and Portable Probabilistic Programming via Compiler Augmentation</h2>
        <img src={require("../images/impulse.png")} className="projectImg" />
        <p className="projectText"> Siyuan Brant Qian, Vikram Sathia, Jesse Michel, William S. Moses<br></br>
          PLDI 2026 SRC
        </p>
        <br></br>
        <h2 className="nameTitle">Semantics of Integrating and Differentiating Singularities</h2>
        <img src={require("../images/singularities.png")} className="projectImg" />
        <p className="projectText">Jesse Michel, Wonyeol Lee, Hongseok Yang<br></br>
          PLDI 2025 (<a href="https://dl.acm.org/doi/pdf/10.1145/3729263">Paper</a>)
          {/* (<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/teg-2021.pdf">Paper</a>) */}
          {/* (<a href="https://mit.zoom.us/rec/play/AviQ8S0vTPm0WuopMPnSOZMuUdA-gdtmOkrkXosRrH3Y3BdJzKVGouIJJEmITvA9XymXIFWGcG3wlpym.aro759kUimJX91Rh?autoplay=true&continueMode=true&startTime=1626966335000">Video</a>) */}
        </p>
        <br></br><br></br><br></br>
        <h2 className="nameTitle">Learning to Compile Programs to Neural Networks</h2>
        <img src={require("../images/learning_to_compile.png")} className="projectImg" />
        <p className="projectText">Logan Weber, Jesse Michel, Alex Renda, Michael Carbin<br></br>
          ICML 2024 (<a href="https://openreview.net/pdf?id=rJti61Uere">Paper</a>)
          {/* (<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/teg-2021.pdf">Paper</a>) */}
          {/* (<a href="https://mit.zoom.us/rec/play/AviQ8S0vTPm0WuopMPnSOZMuUdA-gdtmOkrkXosRrH3Y3BdJzKVGouIJJEmITvA9XymXIFWGcG3wlpym.aro759kUimJX91Rh?autoplay=true&continueMode=true&startTime=1626966335000">Video</a>) */}
        </p>
        <br></br><br></br><br></br>
        <h2 className="nameTitle">Distributions for Compositionally Differentiating Parametric Discontinuities</h2>
        <img src={require("../images/potto_icon.png")} className="projectImg" />
        <p className="projectText"> Jesse Michel, Kevin Mu, Xuanda Yang, Sai Bangaru, Elias Rojas Collins, Gilbert Bernstein, Jonathan Ragan-Kelley, Michael Carbin, Tzu-Mao Li<br></br>
          OOPSLA 2024 (<a href="https://dl.acm.org/doi/pdf/10.1145/3649843">Paper</a>) (<a href="https://www.youtube.com/live/ltA6hQAdhSw?feature=shared&t=20255">Video</a>)
          {/* (<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/teg-2021.pdf">Paper</a>) */}
          {/* (<a href="https://mit.zoom.us/rec/play/AviQ8S0vTPm0WuopMPnSOZMuUdA-gdtmOkrkXosRrH3Y3BdJzKVGouIJJEmITvA9XymXIFWGcG3wlpym.aro759kUimJX91Rh?autoplay=true&continueMode=true&startTime=1626966335000">Video</a>) */}
        </p>
        <br></br><br></br>
        <h2 className="nameTitle">Systematically Differentiating Parametric Discontinuities</h2>
        <img src={require("../images/teg_icon.png")} className="projectImg" />
        <p className="projectText"> Sai Praveen Bangaru*, Jesse Michel*, Kevin Mu, Gilbert Bernstein, Tzu-Mao Li, Jonathan Ragan-Kelley<br></br>
          SIGGRAPH 2021 (<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/teg-2021.pdf">Paper</a>)(<a href="https://people.csail.mit.edu/sbangaru/projects/teg-2021/">Website</a>)(<a href="https://mit.zoom.us/rec/play/AviQ8S0vTPm0WuopMPnSOZMuUdA-gdtmOkrkXosRrH3Y3BdJzKVGouIJJEmITvA9XymXIFWGcG3wlpym.aro759kUimJX91Rh?autoplay=true&continueMode=true&startTime=1626966335000">Video</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle"><InlineMath math={'\\lambda_S'} />: Computable semantics for differentiable programming with higher-order functions and datatypes</h2>
        <img src={require("../images/diff_prob.png")} className="projectImg" />
        <p className="projectText"> Benjamin Sherman, Jesse Michel, Michael Carbin<br></br>
          Principles of Programming Languages 2020 (<a href="https://dl.acm.org/doi/10.1145/3434284">Paper</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle">Sensitivities for Guiding Refinement in Arbitrary-Precision Arithmetic</h2>
        <img src={require("../images/master_thesis.png")} className="projectImg" />
        <p className="projectText"> Jesse Michel<br></br>
          Thesis supervised by Ben Sherman and advised by Michael Carbin 2020 (<a href="https://dspace.mit.edu/bitstream/handle/1721.1/127465/1192966915-MIT.pdf?sequence=1&isAllowed=y">Thesis</a>)
        </p>
        <br></br><br></br>

        <h2 className="nameTitle">NAP: Noise-Based Sensitivity Analysis for Programs</h2>
        <img src={require("../images/wax.png")} className="projectImg" />
        <p className="projectText"> Jesse Michel*, Sahil Verma*, Benjamin Sherman, Michael Carbin<br></br>
          Workshop on Approximate Computing Across the Stack (WAX) 2019 (<a href="http://approximate.computer/wax2019/papers/michel.pdf">Summary</a>)
        </p>
        <br></br><br></br><br></br>

        <h2 className="nameTitle">Sound and Robust Solid Modeling via Exact Real Arithmetic and Continuity</h2>
        <img src={require("../images/icfp.png")} className="projectImg" />
        <p className="projectText"> Benjamin Sherman, Jesse Michel, Michael Carbin<br></br>
          International Conference on Functional Programming 2019 (<a href="https://doi.org/10.1145/3341703">Paper</a>)
        </p>
        <br></br><br></br><br></br>

        <h2 className="nameTitle">Directed Random Geometric Graphs </h2>
        <img src={require("../images/drgg.png")} className="projectImg" />
        <p className="projectText"> Jesse Michel*, Sushruth Reddy*, Rikhav Shah*, Sandeep Silwal*, Ramis Movassagh <br></br>
          Journal of Complex Networks 2019 (<a href="https://doi.org/10.1093/comnet/cnz006">Paper</a>)
        </p>

        <br></br><br></br><br></br><br></br>
        <h1>Teaching</h1>
        <h2 className="nameTitle">Programming Language Design</h2>
        {/* spring 2023 */}
        <img src={require("../images/pld.png")} className="projectImg" />
        <p className="projectText"> As a graduate teaching assistant, I helped develop a new class with Jack Feser, Michael Carbin, and Armando Solar-Lezama.
          My duties involved helping to design course materials, holding office hours, and grading (<a href="https://people.csail.mit.edu/feser/pld-s23/">Course</a>).
        </p>

        <br></br><br></br>

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
        <p className="projectText"> I spent six semesters involved with this class working under Adam Hartz.
          I spent a semester as a student lab assistant,
          four semesters as a lab assistant, and a semester as a teaching assistant.
          I designed exam questions, improved the course website CatSoop, graded exams,
          and helped students in office hours (<a href="https://py.mit.edu/">Course</a>).
        </p>

        <br></br><br></br>
        <h1>Awards</h1>
        Silver in the graduate student research competition at PLDI 2023 <br></br>
        Ashar Aziz Presidential Fellowship 2020 <br></br>
        Gold in the undergraduate student research competition at PLDI 2019 (<a href="https://src.acm.org/binaries/content/assets/src/2020/jesse-michel-.pdf">Paper</a>)<br></br>
        Distinguished Paper Award at ICFP 2019 <br></br>
        First Place Overall at HackMIT 2018 (<a href="https://devpost.com/software/ennui">Ennui</a>)<br></br>
        First Place Overall at HackMIT 2017 (<a href="https://devpost.com/software/pixelator">Pixelator</a>)<br></br>
        <br></br><br></br>
        <h1>Contact</h1>
        <p>Email: jmmichel at my institution</p>
        <p>Twitter: <a href="https://x.com/JesseMMichel">@JesseMMichel</a></p>
        <p>Github: <a href="https://github.com/martinjm97">martinjm97</a></p>
        <br></br>
      </div>
    );
  }
}

export default HomePage;
