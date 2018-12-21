import React from 'react';
import Recipe from './Recipe';

export default function RecipesList(props) {
  // console.log(props);
  let RecipesGallery = props.recipes.map((recipe, i) => {
    return (
      <img 
        src={recipe.imageURL} 
        alt={recipe.name} 
        id={recipe.name} 
        key={i}  
        onClick={props.handleClick} />
    );
  });
  return (
    <div className="recipes-list">
      <div className="recipes-gallery">
        {RecipesGallery}
      </div> 
      {/* <Recipe /> */}
    </div>
  );
}