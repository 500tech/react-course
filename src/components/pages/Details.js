import React from 'react';
// import styled from 'styled-components';
import Card from '../common/Card';
import { get } from 'lodash/fp';
import { add, sub } from '../../redux/actions/counter.actions';
import { connect } from 'react-redux';

class Details extends React.Component {
  render() {
    console.log(this.props);
    const { match } = this.props;

    return (
      <Card>
        {/*{`Details for timer - ${get('params.id', match)}`}*/}
        <div onClick={() => this.props.add(5)}>add</div>
        <div onClick={this.props.sub}>sub</div>
        {this.props.counter}
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(mapStateToProps, {
  add,
  sub
})(Details);
