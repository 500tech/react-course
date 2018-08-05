import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div className="app">

    <div className="navigation">
      <div className="logo">timerApp</div>
      <div className="avatar" />
    </div>

    <div className="header">
      <input className="input" placeholder="timer description" />
      <div className="button">add new</div>
    </div>

    <div className="list">
      <div className="item">
        <div className="left-area">
          <div className="date">October 12, 2018</div>
          <div className="label">Learn the basics of React</div>

          <div className="actions">
            <div className="delete">delete</div>
            <div className="favorite">favorite</div>
          </div>
        </div>
        <div className="right-area">
          <div className="time">12:40</div>
        </div>
      </div>

      <div className="item">
        <div className="left-area">
          <div className="date">October 12, 2018</div>
          <div className="label">Learn Redux</div>

          <div className="actions">
            <div className="delete">delete</div>
            <div className="favorite">favorite</div>
          </div>
        </div>
        <div className="right-area">
          <div className="time">12:40</div>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
