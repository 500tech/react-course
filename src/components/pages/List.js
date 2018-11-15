import React, { Component, Fragment } from 'react';
import Modal from '../common/Modal';

class List extends React.Component {
  state = {
    inputValue: 'untitled',
    isModalOpen: false,
    data: [
      { id: 0, label: 'item 0' },
      { id: 1, label: 'item 1' },
    ]
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addItem = () => {
    this.setState({
      data: [
        ...this.state.data,
        { id: this.uuid(), label: this.state.inputValue }
      ]
    }, () => {
      // ref to the input
      this.input.value = '';
    })
  };

  removeItem(id) {
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    })
  }

  render() {
    const { data, isModalOpen } = this.state;
    console.log(this.props);

    return (
      <Fragment>
        <Modal
          isOpen={isModalOpen}
          toggleOpen={() => this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))}
        />

        <div className="list">
          <div
            className="button"
            onClick={() => this.setState({ isModalOpen: true })}
          >open modal
          </div>
          <div className="button" onClick={this.addItem}>add item</div>
          <input
            ref={el => this.input = el}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />

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
      </Fragment>
    );
  }
}

export default List;
