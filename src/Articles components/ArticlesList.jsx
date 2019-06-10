import React from 'react';
import { Link } from '@reach/router';
import './ArticleList.css';

const ArticleList = props => {
  const { article } = props;
  return (
    <div id="container-items">
      <Link to={`/articles/${article.article_id}`}>
        <h4 className="article-list-title">{article.title}</h4>
        <h4 className="article-list-author">Author: {article.author}</h4>
        <h4>Topic: {article.topic}</h4>
        <h4>Likes: {article.votes}</h4>
        <h4>{article.created_at}</h4>
      </Link>
    </div>
  );
};

export default ArticleList;
