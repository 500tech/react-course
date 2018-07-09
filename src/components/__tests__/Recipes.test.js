import React from 'react';
import { shallow } from 'enzyme';
import Recipes from '../Recipes';

const setup = (recipes = []) => {
  const wrapper = shallow(<Recipes recipes={ recipes } toggle={ () => {} } />);
  return { wrapper };
};

describe('Recipes', () => {
  it('should render empty list', () => {
    const { wrapper } = setup();
    expect(wrapper.find('ul').props().children.length).toEqual(0)
  })

  it('should render recipes', () => {
    const recipes = [{ id: 10 }, { id: 11 }];
    const { wrapper } = setup(recipes);
    expect(wrapper.find('ul').props().children.length).toEqual(2);
    expect(wrapper.find('ul').props().children[0].props.recipe).toEqual(recipes[0]);
    expect(wrapper.find('ul').props().children[1].props.recipe).toEqual(recipes[1]);
  })
});
