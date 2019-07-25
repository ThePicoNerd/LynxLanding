import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import GridCol from "./GridCol";

export default class TextSection extends React.Component {
  render() {
    return (
      <GridCol className={this.props.className}>
        <AnimatedTitle>{this.props.title}</AnimatedTitle>
        {this.props.children}
      </GridCol>
    );
  }
}
