import React, { Component } from "react";
import "./style.css";
import Card from "../layout/card";
class Forsa extends Component {
  render() {
    return (
      <div className="Table">
        <Card table={"forsa"} title={"فرصة"} />
      </div>
    );
  }
}
export default Forsa;
