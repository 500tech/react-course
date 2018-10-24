import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fade from 'react-reveal/Fade';

class App extends React.Component {
  state = {
    items: [
      { id: 0, label: 'label 0' },
      { id: 1, label: 'label 1' }
    ]
  };

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addItem = () => {
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { id: this.uuid(), label: this.input.value || 'untitled' }
      ]
    }), () => {
      this.input.value = '';
    });
  };

  removeItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <Card title="my list">
          <Button onClick={this.addItem}>add new item</Button>
          <input
            placeholder="add new item"
            ref={(el) => this.input = el}
          />

          <List items={items} removeItem={this.removeItem} />
        </Card>
      </div>
    );
  }
}

const List = props => (
  <div className="list">
    {
      props.items.map(item => (
        <ListItem {...item} key={item.id} removeItem={props.removeItem} />
      ))
    }
  </div>
);

const ListItem = props => (
  <Fade top>
    <div className="list-item">
      <div>{props.label}</div>
      <div
        className="delete"
        onClick={() => props.removeItem(props.id)}>
        delete
      </div>
    </div>
  </Fade>
);

const Button = props => (
  <div className="button" onClick={props.onClick}>{props.children}</div>
);

// const Input = props => (
//   <input
//     placeholder={props.placeholder}
//     defaultValue={props.value}
//     onChange={props.onChange}
//   />
// );

// const Label = (props) => (<h3>{props.label}</h3>);

// const withSpinner = Comp => props => (
  {/*<div>*/}
    // {props.loading && <div>loading...</div>}
    {/*<Comp {...props}/>*/}
  // </div>
// );

// const LabelWithSpinner = withSpinner(Label);

const Card = props => (
  <Fade top>
    <div className="card">
      <div className="title">{props.title}</div>
      {props.children}
    </div>
  </Fade>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
