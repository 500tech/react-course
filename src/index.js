import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerHeader from './components/InnerHeader';
import Main from './components/Main';
import InnerFooter from './components/InnerFooter';

const App = () => (
  <div>

  <section className="todoapp">

    <InnerHeader />

    <Main />

    <InnerFooter />
  </section>

  <Footer />
  </div>
);

render(
  <App/>,
  document.getElementById('root')
);
