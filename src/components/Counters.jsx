import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    //console.log("counters rendered");
    const { onReset, counter, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </>
    );
  }
}

export default Counters;
