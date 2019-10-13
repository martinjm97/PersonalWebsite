import React, { Component } from "react";
import "./App.scss";

class NamePage extends Component {

  public render() {
    return (
      <div className="Page">
        <h1 className="nameTitle">John Doe-Smith</h1>
        <img className="placeholderPortrait"></img>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sint dignissimos reprehenderit ratione delectus ad ea nisi quidem enim tempora, temporibus consequuntur aspernatur voluptatibus molestiae minus cum praesentium, deleniti voluptatem.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam nihil non inventore eos expedita eius vero illum velit eveniet, ipsum itaque accusamus laborum perferendis fuga porro voluptatibus fugiat commodi.
        
        </p>
        
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore amet harum eum, inventore dolores laudantium nobis praesentium consectetur veniam soluta ea itaque sunt laborum blanditiis nihil, deserunt, quisquam dignissimos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi porro perferendis amet esse aperiam cum placeat, tempore officiis corrupti culpa laboriosam voluptatibus excepturi reprehenderit doloremque, repellat fugit at quam.

        </p>

        <h2 className="sectionTitle"> Hobbies</h2>
        <img className="placeholderImg"></img>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sint dignissimos reprehenderit ratione delectus ad ea nisi quidem enim tempora, temporibus consequuntur aspernatur voluptatibus molestiae minus cum praesentium, deleniti voluptatem.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam nihil non inventore eos expedita eius vero illum velit eveniet, ipsum itaque accusamus laborum perferendis fuga porro voluptatibus fugiat commodi.

        </p>
      </div>
    );
  }
}

export default NamePage;
