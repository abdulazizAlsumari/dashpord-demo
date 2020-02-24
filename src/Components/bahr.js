import React, { Component } from "react";
import "./style.css";
import Card from "../layout/card";
class Bahr extends Component {
  render() {
    return (
      <div className="Table">
        <Card table={"bahr"} title={"بحر"} />
      </div>
    );
  }
}
export default Bahr;
