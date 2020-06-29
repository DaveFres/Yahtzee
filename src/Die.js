import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor() {
    super();
    this.handleDiceClick = this.handleDiceClick.bind(this);
  }

  handleDiceClick() {
    const {handleClick, idx} = this.props;
    handleClick(idx);
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleDiceClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
