import React from "react";

export default class HighlightedIcon extends React.Component {
  render() {
    return (
      <div className={"highlighed-icon"}>
        {this.props.children}
      </div>
    );
  }
}
