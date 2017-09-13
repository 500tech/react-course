import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerFooter from "./components/InnerFooter";
import Main from "./components/Main";
import Header from "./components/Header";

const App = () => (
  <div>
    <section className="todoapp">
      <Header/>
      <Main/>
      <InnerFooter/>
    </section>

    <Footer/>
  </div>
);

render(
  <App/>,
  document.getElementById('root')
);
