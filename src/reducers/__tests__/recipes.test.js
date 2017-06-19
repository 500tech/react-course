import reducer from '../recipes';
import deepFreeze from 'deep-freeze';
import { addRecipe } from '../../actions/recipes';

const initialState = deepFreeze(reducer(undefined, { type: 'INIT' }));

describe('recipes reducer', () => {
  it('should handle unknown actions', () => {
    expect(reducer(initialState, { type: 'FAKE' })).toBe(initialState);
  });

  describe('add action', () => {
    it('should add recipe to empty list', () => {
      expect(reducer(initialState, addRecipe(1, 'test', 'desc'))).toMatchSnapshot()
    });

    it('should add recipe to a non-empty list', () => {
      const nonEmptyState = deepFreeze(reducer(initialState, addRecipe(1, 'first', '1')));

      expect(reducer(nonEmptyState, addRecipe(2, 'second', '2'))).toMatchSnapshot();
    });
  });
});