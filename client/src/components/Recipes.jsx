import React from 'react';
import RecipesList from './RecipesList';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: '',
      // recipes array of object will be refactored once fetching from the backend is integrated
      recipes: [
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
          name: 'Lemony Chicken and Spinach Soup',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn',
          name: 'Oatmeal Scotchies',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/6046101_dtdin8546_beer.jpg?itok=SlXEw2dG',
          name: 'Mango',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/hanger-steak-lemon-butter.jpg?itok=RCk81X_O',
          name: 'Easiest Single-Skillet Dinner',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0470.jpg?itok=PdSpu3Af&1521836644',
          name: 'Dinner Tonight',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/everything-jal-poppers.jpg?itok=cXIxgwiC',
          name: 'Appetizer',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2016_10_18_myrecipes_2324.jpg?itok=5X5cKBA5',
          name: 'Another Appetizer',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2487601_summe_0061.jpg?itok=IvXITcWe',
          name: 'Main Dish Casserole',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
        {
          imageURL: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/steak-tomato-panzanella-ck.jpg?itok=GMpSDtcI',
          name: 'Beef Main Dish',
          content: 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio hic dolores reiciendis, magnam at harum obcaecati maiores ullam. Esse porro dolores cupiditate placeat harum distinctio totam tempora molestiae. Voluptatem.'
        },
      ]
    }
  }
  handleClick = (e) => {
    this.setState({
      selectedRecipe: e.target.id
    })
    // console.log(e.target.id);
  }
  render() {
    console.log(this.state);
    return (
      <div className="recipes">
        <h1>Katatatouille</h1>
        (!this.state.selectedRecipe )
        ? 
        : <RecipesList recipes={this.state.recipes} selectedRecipe={this.state.selectedRecipe} handleClick={this.handleClick} />
      </div>
    );
  }
}