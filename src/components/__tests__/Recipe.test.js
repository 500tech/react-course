import React from 'react';
import Recipe from '../Recipe';
import { shallow } from 'enzyme';

const setup = (favorite = false, toggle = () => {}) => {
  const recipe = { favorite, title: 'Test' };
  const wrapper = shallow(<Recipe recipe={ recipe } toggle={ toggle } />);

  return { wrapper, recipe, toggle }
};

describe('Recipe', () => {
  it('should work', () => {
    const { wrapper, recipe } = setup();
    expect(wrapper.find('li').props().children).toEqual(recipe.title);
  });

  describe('check class', () => {
    it('should have favorite set when favorite', () => {
      const { wrapper } = setup(true);
      expect(wrapper.find('li').props().className).toEqual('favorite');
    });

    it('should NOT have favorite set when NOT favorite', () => {
      const { wrapper } = setup(false);
      expect(wrapper.find('li').props().className).toEqual('');
    });
  });

  it('should call toggle', () => {
    const { wrapper, recipe, toggle } = setup(true, jest.fn());

    wrapper.find('li').simulate('click');

    expect(toggle.mock.calls).toEqual([[recipe]]);
  });
});
