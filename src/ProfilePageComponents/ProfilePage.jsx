import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleList from "../ArticlesComponents/ArticlesList";

class ProfilePage extends Component {
  state = { usersArticles: null, total_count: null };

  componentDidMount() {
    const { user } = this.props;
    if (user) {
      getArticles({ author: this.props.user.username })
        .then(({ articles, total_count }) => {
          this.setState({ usersArticles: articles, total_count });
        })
        .catch(({ response }) => {
          const errStatus = response.status;
          const errMessage = response.data.msg;
          const err = { errStatus, errMessage };
          this.setState({ err });
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { user } = this.props;
    if (user && prevProps.user !== this.props.user) {
      getArticles({ author: this.props.user.username })
        .then(({ articles, total_count }) => {
          this.setState({ usersArticles: articles, total_count });
        })
        .catch(({ response }) => {
          const errStatus = response.status;
          const errMessage = response.data.msg;
          const err = { errStatus, errMessage };
          this.setState({ err });
        });
    }
  }

  render() {
    const { user } = this.props;
    const { usersArticles } = this.state;
    return (
      <div>
        {user && usersArticles && (
          <>
            <h1>My Articles</h1>
            <ul id="container">
              {usersArticles.map(article => {
                return (
                  <ArticleList
                    key={`authorsArticle${article.article_id}`}
                    article={article}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default ProfilePage;
