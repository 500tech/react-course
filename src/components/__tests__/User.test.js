import React from 'react';
import { shallow } from 'enzyme';
import { User } from '../User';

const noop = () => {};

const setup = (cb = noop) => {
  const user = { name: 'Kipi' };
  const wrapper = shallow(<User user={ user } fetchUser={ cb } />);
  return { wrapper, user, cb };
};

describe('<Recipe />', () => {
  it('renders span component with name', () => {
    const { wrapper, user } = setup();

    expect(wrapper.find('span').props().children).toBe(user.name);
  });


  it('should call fetch', () => {
    const { wrapper, cb } = setup(jest.fn());

    wrapper.find('span').simulate('click');

    expect(cb.mock.calls).toEqual([[]]);
  });
});