import React from 'react';
import RecipesList from './RecipesList';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesList: [],
      recipesImages: [
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/6046101_dtdin8546_beer.jpg?itok=SlXEw2dG',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/hanger-steak-lemon-butter.jpg?itok=RCk81X_O',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0470.jpg?itok=PdSpu3Af&1521836644',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/everything-jal-poppers.jpg?itok=cXIxgwiC',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2016_10_18_myrecipes_2324.jpg?itok=5X5cKBA5',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2487601_summe_0061.jpg?itok=IvXITcWe',
        'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/steak-tomato-panzanella-ck.jpg?itok=GMpSDtcI',
      ],
    }
  }
  render() {
    return (
      <div className="recipes">
        <h1>This is the Recipes component</h1>
        <RecipesList recipesImages={this.state.recipesImages} />
      </div>
    );
  }
}