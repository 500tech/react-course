import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// npm test -- --coverage

describe('test app.js', () => {
  it('Simple Test', () => {
    expect(true).toEqual('true');
    expect(5).toEqual(5);
  });

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders without crashing - smoke test', () => {
    shallow(<App />);
  });

  it('should match the snapshot', () => {
    const component = renderer
      .create(<App />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
