import React from "react";
import CountUp from "react-countup";
const Table = props => {
  return (
    <div className="Table-firstTable_table">
      <img className="Table-firstTable_table__img" src="./img/home.png" />
      <p className="Table-firstTable_table__P">
        <span id="number">
          <CountUp end={props.number} />
        </span>
      </p>
      <ul className="Table-firstTable_table__options">
  <h1 className="Table-firstTable_table__header">{props.tex}</h1>
      </ul>
    </div>
  );
};
export default Table;
