import React from 'react';
import Button from '../common/Button';
import { connect } from 'react-redux';
import { add, fetchTimers } from '../../redux/actions/counter.actions';

const Item = (props) => {
  props.fetchTimers();

  //onClick={() => props.history.push('/list')}
  return (
    <div onClick={() => props.add(10)}>
      item page - {props.match.params.id}
      <Button />
      {props.counterValue}
    </div>
  );
};

const mapStateToProps = (state) => ({
  counterValue: state.counter
});

export default connect(
  mapStateToProps,
  { add, fetchTimers }
)(Item);
