import React from 'react';
import { ArticleList } from './ArticleList';
import articles from '../articles';

export class Application extends React.Component{
  render() {
    return(
      <div>
        <h1>App name</h1>
        <ArticleList articles={ articles } />
      </div>
    )
  }
}
