import React from 'react';

export class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = new State(props.defaultOpen);
  }

  handleClick = () => {
    this.setState((state) =>  new State(!state.getIsOpen()) );
  };

  componentWillMount() {

  }

  componentWillReceiveProps(props) {
    if (props.defaultOpen !== this.props.defaultOpen) {
      this.setState((state) => new State(props.defaultOpen))
    }
  }

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <section>{ article.text }</section>;
    const buttonText = this.state.getIsOpen() ? 'Close' : 'Open';

    return(
      <div>
        <h2>
          { article.title }
          <button onClick={this.handleClick}>
            { buttonText }
          </button>
        </h2>
        { body }
        <h3>creation date: { (new Date(article.date)).toDateString() }</h3>
      </div>
    );
  }

}

class State {
  constructor(isOpen) {
    this.isOpen = isOpen;
  }

  getIsOpen = () => this.isOpen;
}
