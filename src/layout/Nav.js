import React, { Component } from "react";
import "../Components/style.css";
export default class Nav extends Component {
  state = {};
  getDropList = () => {
    let year = new Date().getFullYear();
    return Array.from(new Array(5), (v, i) => (
      <option id="list" key={i} value={year - i}>
        {year - i}
      </option>
    ));
  };
  getDropListM = () => {
    const mounth = new Date().getMonth();
    return Array.from(new Array(12), (v, i = 1) => (
      <option id="list" key={i} value={mounth + i}>
        {mounth + i}
      </option>
    ));
  };

  showSelect = () => this.setState({ showSelectValue: true });

  hideSelect = () => this.setState({ showSelectValue: false });

  render() {
    const { onYearChange } = this.props;
    const { onMounthChange } = this.props;
    const { showSelectValue } = this.state;
    return (
      <div className="filter-container">
        <nav
          id="slideNav"
          className={showSelectValue ? "show" : ""}
          onMouseLeave={this.hideSelect}
        >
          <div id="menu">
            <select id="select" onChange={e => onYearChange(e.target.value)}>
              {this.getDropList()}
            </select>
            <select id="select" onChange={e => onMounthChange(e.target.value)}>
              {this.getDropListM()}
            </select>
          </div>
        </nav>
        <div className="content">
          <div className="contentOverlay">
            <a href="#"></a>
          </div>
          <a className="img" onClick={this.showSelect}>
            <img className="material-icons" src="./img/filter.svg" />
          </a>
        </div>
      </div>
    );
  }
}
