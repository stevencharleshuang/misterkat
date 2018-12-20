import React from 'react';
import BlogsList from './BlogsList';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesList: [],
    }
  }
  render() {
    return (
      <div className="blogs">
        <h1>This is the Blogs component</h1>
        <BlogsList />
      </div>
    );
  }
}