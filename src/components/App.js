import React from 'react';
import { ArticleList } from './ArticleList';
import articles from '../articles';

export class Application extends React.Component{
  constructor(props) {
    super(props);

    this.state = new State(false);
  }

  revert = () => {
    this.setState((state) =>  {
      console.log('STATE ', state)
      return new State(!state.isReverted())
    } );
  };

  render() {
    return(
      <div>
        <h1>
          App name
          <button
            className={ 'revertButton' }
            onClick={ this.revert }
          >
            Revert
          </button>
        </h1>
        <ArticleList articles={this.state.isReverted() ? articles.reverse() : articles } />
      </div>
    )
  }
}

class State {
  constructor(reverted) {
    this.reverted = reverted;
  }

  isReverted = () => this.reverted;
}
