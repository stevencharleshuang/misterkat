import React from 'react';
import Blog from './Blog';

export default function BlogsList(props) {
  let BlogsSelection = props.blogs.map((blog, i) => {
    return (
      <article className="blog-post">
        <img 
          src={blog.imageURL}
          id={blog.title}
          key={i}
        />
        <div className="blog-excerpt">
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