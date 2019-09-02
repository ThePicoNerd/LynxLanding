import React from "react";

export default class GridCol extends React.Component {
  render() {
    return (
      <div className={"col " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
