import React from 'react';

export default function Blog(props) {
  // console.log('Blog Props:', props);
  let selectedBlog = props.selectedBlog[0];
  return (
    <div className="blog">
      <h2>{selectedBlog.title}</h2>
      <img 
        src={selectedBlog.imageURL} 
        alt={selectedBlog.title}
      />
      <p>
        {selectedBlog.content}
      </p>
      <a href="#" onClick={props.handleClearSelection}>Back to Gallery</a>
    </div>
  );
}