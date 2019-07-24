import React from "react";
import AnimatedTitle from "./AnimatedTitle";

export default class TextSection extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <AnimatedTitle text={this.props.title}></AnimatedTitle>
        {this.props.children}
      </div>
    );
  }
}
