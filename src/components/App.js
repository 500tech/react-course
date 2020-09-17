import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RecipesView from './RecipesView';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

const CatData = ({ match, recipe }) => (
  <h1 style={{ textAlign: 'center', padding: '30px' }}>This is cat {match.params.bla}! - {recipe.title}</h1>
)

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.bla))
});

const ConnectedCat = connect(mapStateToProps)(CatData)


const App = () => (
  <div>
    <Header />
    <RecipesView />

    <Switch>
      <Route exact path='/cat' render={ () => 'Hello' }/>
      <Route path='/cat/:bla' component={ ConnectedCat }/>
    </Switch>

    <Footer />
  </div>
);

export default App;
