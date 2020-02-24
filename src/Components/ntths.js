import React, { Component } from "react";
import "./style.css";
import Card from "../layout/card";
class NTths extends Component {
  render() {
    return (
      <div className="Table">
        <Card table={"ntths"} title={"تسعة أعشار في أسبوع "} />
      </div>
    );
  }
}
export default NTths;
