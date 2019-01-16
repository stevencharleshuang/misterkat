import React from 'react';

export default function Recipe(props) {
  // console.log({props});
  let selectedRecipe = props.selectedRecipe[0];
  return (
    <div className="recipe">
      <h2>{selectedRecipe.name}</h2>
      <img src={selectedRecipe.imageURL} alt={selectedRecipe.name} />
      <section>
        <p>
          {selectedRecipe.content}
        </p>
      </section>
      <span className="span-link" onClick={props.handleClearSelection}>Back to Recipes</span>
    </div>
  );
}