import React from "react";
import ScrollTrigger from "react-scroll-trigger";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onEnterViewport = () => {
    this.setState({
      visible: true,
    });
  }

  onExitViewport = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <ScrollTrigger
        onEnter={this.onEnterViewport}
        onExit={this.onExitViewport}
      >
        <div className={`${this.props.className} section ${this.state.visible ? "is-inview" : ""}`}>
          <div className="container">{this.props.children}</div>
        </div>
      </ScrollTrigger>
    );
  }
}
