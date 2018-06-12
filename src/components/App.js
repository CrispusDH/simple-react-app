import React from 'react';
import { Article } from './Article';
import articles from '../articles';

export class Application extends React.Component{
  render() {
    return(
      <div>
        <h1>App name</h1>
        <Article article={ articles[0] } />
      </div>
    )
  }
}
