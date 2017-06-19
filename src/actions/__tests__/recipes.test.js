import * as actions from '../recipes';

describe('actions', () => {
  it('should create an action to add a recipe with snapshot', () => {
    expect(actions.addRecipe(1, 'title', 'desc')).toMatchSnapshot();
  });

  it('should create an action to add a recipe with trimmed title', () => {
    expect(actions.addRecipe(1, 'title', ' trimmed ')).toMatchSnapshot();
  });

  it('should create fetch action', () => {
    expect(actions.fetchRecipes()).toMatchSnapshot();
  });
});
