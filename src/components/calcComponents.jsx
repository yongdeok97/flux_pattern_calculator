import React from 'react';
import { connect } from 'react-redux';
import {
  plus,
  minus,
  multiply,
  divide,
  result,
} from '../actions/calculatorActions';

const CounterComponent = ({ count, plus, minus, multiply, divide, result }) => {
  return (
    <div>
      <h2>num: {count}</h2>
      <button onClick={plus}>Increment</button>
      <button onClick={minus}>Increment</button>
      <button onClick={multiply}>Increment</button>
      <button onClick={divide}>Decrement</button>
      <button onClick={result}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, {
  plus,
  minus,
  multiply,
  divide,
  result,
})(CounterComponent);
