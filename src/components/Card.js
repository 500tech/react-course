import React from 'react';
import { withRouter } from 'react-router';

class Card extends React.Component {
  render() {
    console.log(this.props);
    
    return (
      <h3 onClick={() => {
      }}>click here</h3>
    );
  }
}

export default withRouter(Card);
