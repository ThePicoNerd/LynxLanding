import React from "react";
import ScrollTrigger from "react-scroll-trigger";

export default class GridList extends React.Component {
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
  };

  onExitViewport = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    let cols = this.props.cols || 3;

    return (
      <ScrollTrigger
        onEnter={this.onEnterViewport}
        onExit={this.onExitViewport}
      >
        <ul
          className={`grid-list ${this.state.visible ? "is-inview" : ""}`}
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
          }}
        >
          {this.props.items.map((item, i) => {
            return (
              <li key={i}>
                <span className="animation-wrapper">
                  <span
                    style={{
                      transitionDelay: i * 50 + "ms",
                    }}
                  >
                    {item}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </ScrollTrigger>
    );
  }
}
