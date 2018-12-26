import React from 'react';

export default function Recipe(props) {
  // console.log({props});
  let selectedRecipe = props.selectedRecipe[0];
  return (
    <div className="recipe">
      <h1>{selectedRecipe.name}</h1>
      <img src={selectedRecipe.imageURL} alt={selectedRecipe.name} />
      <section>
        <p>
          {selectedRecipe.content}
        </p>
      </section>
      <a href="#" onClick={props.handleClearSelection}>Back to Gallery</a>
    </div>
  );
}