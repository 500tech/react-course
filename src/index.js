import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';

// components
import Item from './components/Item';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  state = {
    data: [
      { id: 0, label: 'learn React', isChecked: true },
      { id: 1, label: 'learn Redux', isChecked: false },
      { id: 2, label: 'server communication', isChecked: false }
    ]
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  toggleChecked = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map(item => ({
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked
      }))
    }));
  };

  handleKeyUp = (e) => {
    if (e.which === 13) {
      this.setState({
        data: this.state.data.concat({
          id: this.uuid(),
          label: e.target.value,
          isChecked: false
        })
      });
    }
  };

  render() {
    return (
      <Fragment>
        <section className="todoapp">

          <Header handleKeyUp={this.handleKeyUp} />

          <section className="main">
            <input className="toggle-all" type="checkbox" />
            <ul className="todo-list">
              {this.state.data.map(item => <Item key={item.id} {...item} toggleChecked={this.toggleChecked} />)}
            </ul>
          </section>

          <Footer />
        </section>

        <footer className="info">
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </Fragment>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
