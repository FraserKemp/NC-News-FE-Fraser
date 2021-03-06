import React, { Component } from "react";
import GetTopicOptions from "../TopicsComponents/TopicOptions";
import "./ArticlePostForm.css";

export default class ArticlePostForm extends Component {
  state = {
    titleInput: null,
    bodyInput: null,
    topicInput: null,
    err: null
  };
  render() {
    const { topics } = this.props;
    return (
      <div className="post-article-box">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit(this.state);
          }}
          className="aricle-form-body"
        >
          <label>
            <div className="article-textbox">
              <input
                required={true}
                onChange={this.updateTitleInput}
                type="text"
                name="title"
                placeholder="Article title"
              />
            </div>
          </label>
          <br />
          <label>
            <div className="article-textbox">
              <textarea
                required={true}
                onChange={this.updateBodyInput}
                type="text"
                name="body"
                placeholder="Article body"
              />
            </div>
          </label>
          <br />
          <label className="select-style">
            <select
              required={true}
              onChange={this.updateTopicInput}
              className="topic-dropdown"
            >
              <option>Choose here:</option>
              {topics.map((topic, i) => {
                return (
                  <GetTopicOptions key={`topicOption${i}`} topic={topic} />
                );
              })}
            </select>
          </label>
          <br />
          <button className="post-article-btn2">Post Article</button>
        </form>
      </div>
    );
  }
  updateTitleInput = e => {
    this.setState({ titleInput: e.target.value });
  };

  updateBodyInput = e => {
    this.setState({ bodyInput: e.target.value });
  };

  updateTopicInput = e => {
    this.setState({ topicInput: e.target.value });
  };
}
