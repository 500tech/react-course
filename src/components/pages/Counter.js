import React from 'react';
import { connect } from 'react-redux';
import { addCounter, subCounter } from '../../redux/actions/counter.actions';

const Counter = props => {
  return (
    <div>
      <div onClick={() => props.addCounter(10)}>add</div>
      <div onClick={props.subCounter}>sub</div>
      <div style={{ fontSize: 100 }}>
        {props.value}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter
});

export default connect(
  mapStateToProps,
  { addCounter, subCounter }
)(Counter);
