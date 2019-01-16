import React from 'react';

export default function RecipesList(props) {
  // console.log(props);
  let RecipesGallery = props.recipes.map((recipe, i) => {
    return (
      <div 
        className="recipes-gallery-icon" 
        key={i} 
        onClick={props.handleClick} 
        title={recipe.name}
      >
        <h3 title={recipe.name}>
          <span 
            className="span-link"
            title={recipe.name}
          >
            {recipe.name}
          </span>
        </h3>
        <img 
          alt={recipe.name} 
          id={recipe.name}  
          
          src={recipe.imageURL} 
          title={recipe.name}
        />
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