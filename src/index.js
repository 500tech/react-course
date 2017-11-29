import React from 'react';
import { render } from 'react-dom';
import './index.css';
import InnerHeader from './components/InnerHeader';
import Footer from './components/Footer';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <div>
    <section className="todoapp">
      <InnerHeader/>
      <Main/>
    </section>
    <Footer/>
  </div>
);

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
