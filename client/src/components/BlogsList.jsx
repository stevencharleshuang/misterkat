import React from 'react';
import Blog from './Blog';

export default function BlogsList(props) {
  let BlogsSelection = props.blogs.map((blog, i) => {
    return (
      <img 
        src={blog.imageURL}
        key={i}
      />
    );
  });
  return (
    <div className="blogs-list">
      {BlogsSelection}
    </div>
  );
}