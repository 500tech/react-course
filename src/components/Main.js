import React from 'react';
import Todos from './Todos';

const Main = () => (
  <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <Todos />
  </section>
);

export default Main;