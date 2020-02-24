import React, { Component } from "react";
import "./style.css";
import Card from "../layout/card";
class Jahz extends Component {
  render() {
    return (
      <div className="Table">
        <Card table={"jahz"} title={"جاهز"} />
      </div>
    );
  }
}
export default Jahz;
