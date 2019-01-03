import React from 'react';

export default function BlogsList(props) {
  let BlogsSelection = props.blogs.map((blog, i) => {
    return (
      <article className="blog-post">
        <img 
          src={blog.imageURL}
          id={blog.title}
          key={i}
          onClick={props.handleClick}
        />
        <div 
          className="blog-excerpt" 
          id={blog.title}
          key={`${i}-${i}`} 
          onClick={props.handleClick}
        >
          <h2>{blog.title}</h2>
          <p>{blog.content.slice(0, 100).concat('...')}</p>
        </div>
      </article>
    );
  });
  return (
    <div className="blogs-list">
      {BlogsSelection}
    </div>
  );
}