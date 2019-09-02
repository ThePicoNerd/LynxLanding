import React from "react";
import ScrollTrigger from "react-scroll-trigger";

export default class AnimatedTitle extends React.Component {
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
    let words = this.props.children.split(" ");
    let offset = 0;
    let delay = this.props.delay || 20;

    return (
      <ScrollTrigger
        onEnter={this.onEnterViewport}
        onExit={this.onExitViewport}
      >
        <h1
          className={`animated-title ${this.props.className} ${this.state.visible ? "is-inview" : ""}`}
        >
          {words.map((word, i) => {
            let letters = word.split("");

            offset += letters.length;

            return (
              <Word
                key={i}
                letters={letters}
                offset={offset - letters.length}
                delay={delay}
              ></Word>
            );
          })}
        </h1>
      </ScrollTrigger>
    );
  }
}

class Word extends React.Component {
  render() {
    let { letters, offset } = this.props;
    let delayFactor = this.props.delay;

    return (
      <div className="word">
        {letters.map((letter, i) => {
          let delay = (offset + i) * delayFactor + "ms";

          return (
            <span
              className="letter"
              key={i}
              style={{
                transitionDelay: delay,
                animationDelay: delay,
              }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    );
  }
}
