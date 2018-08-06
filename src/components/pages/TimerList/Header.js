import React from 'react';
import { withRouter } from 'react-router';

// components
import Button from '../../common/Button';
import Input from '../../common/Input';

class Header extends React.Component {
  state = {
    value: ''
  };

  handleClick = () => {
    this.props.addItem(this.state.value);
    this.setState({ value: '' });
  };

  handleInputChange = (e) => (this.setState({ value: e.target.value }));

  render() {
    const { value } = this.state;

    return (
      <div className="header">
        <Input
          value={value}
          placeholder="description"
          onChange={this.handleInputChange}
        />
        <Button label="add new" onClick={this.handleClick} />
      </div>
    );
  }
}

export default withRouter(Header);
