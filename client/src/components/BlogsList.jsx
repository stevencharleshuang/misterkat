import React from 'react';

export default function BlogsList(props) {
  let BlogsSelection = props.blogs.map((blog, i) => {
    return (
      <article className="blog-post" key={i}>
        <img
          alt={blog.title} 
          src={blog.imageURL}
          title={blog.title}
          onClick={props.handleClick}
        />
        <div 
          className="blog-excerpt"
          title={blog.title}
          onClick={props.handleClick}
        >
          <h2><span className="span-link" title={blog.title}>{blog.title}</span></h2>
          <p title={blog.title}>{blog.content.slice(0, 100).concat('...')}</p>
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