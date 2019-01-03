import React from 'react';

export default function RecipesList(props) {
  // console.log(props);
  let RecipesGallery = props.recipes.map((recipe, i) => {
    return (
      <div className="recipes-gallery-icon">
        <h3>{recipe.name}</h3>
        <img 
          src={recipe.imageURL} 
          alt={recipe.name} 
          id={recipe.name} 
          key={i}  
          onClick={props.handleClick} />
      </div>
    );
  });
  // console.log('recipes list selected recipe: ', props.selectedRecipe);
  return (
    <div className="recipes-list">
      <div className="recipes-gallery">
        {RecipesGallery}
      </div> 
    </div>
  );
}