import React from "react";

export default class GridList extends React.Component {
  render() {
    let cols = this.props.cols || 3;

    return (
      <ul
        className="grid-list"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {this.props.items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  }
}
