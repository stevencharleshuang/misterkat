import React from 'react';
import RecipesList from './RecipesList';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesList: [],
    }
  }
  render() {
    return (
      <div className="recipes">
        <h1>This is the Recipes component</h1>
        <RecipesList />
      </div>
    );
  }
}