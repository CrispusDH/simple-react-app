import React from 'react';
import { Article } from "./Article";
import articles from "../articles";

export class ArticleList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { articles } = this.props;
    const articleElements = articles.map((article) =>
      <li key = { article.id }><Article article = {article}/></li>
    );

    return (
      <ul>
        { articleElements }
      </ul>
    )
  }
}