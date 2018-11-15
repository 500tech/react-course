import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
  state = {
    data: [
      { id: 0, label: 'item 0' },
      { id: 1, label: 'item 1' },
    ]
  };

  addItem = () => {
    this.setState({
      data: [
        ...this.state.data,
        { id: 6, label: 'untitled' }
      ]
    })
  };

  removeItem(id) {
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="list">
        <div className="button" onClick={this.addItem}>add item</div>

        {
          data.length ? (
            data.map(item => (
              <div
                className="item"
                key={item.id}
                onClick={() => this.removeItem(item.id)}
              >
                {item.label}
              </div>
            ))
          ) : 'empty!'

        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


