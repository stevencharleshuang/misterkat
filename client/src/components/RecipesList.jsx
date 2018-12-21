import React from 'react';
import Recipe from './Recipe';

export default function RecipesList(props) {
  console.log(props);
  let RecipesGallery = props.recipesImages.map((imageURL, i) => {
    return <img src={imageURL} alt="imageURL" key="i" />     
  })
  return (
    <div className="recipes-list">
      <h1>This is the RecipesList component</h1>
      <div className="recipes-gallery">
        {RecipesGallery}
      </div> 
      {/* <Recipe /> */}
    </div>
  );
}