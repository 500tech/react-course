import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    label: 'foo'
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ label: 'hello oracle '});
    }, 3000);
  }

  render() {
    return (
      <div>
        <Header label={this.state.label} />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <h3>{this.props.label}</h3>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
