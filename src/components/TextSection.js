import React from "react";
import { Parallax } from "react-scroll-parallax";

export default class TextSection extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </div>
    );
  }
}
