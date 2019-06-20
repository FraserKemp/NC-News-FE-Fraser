import React, { Component } from "react";
import "./Filter.css";
import "../ArticlesComponents/node_modules/@fortawesome/fontawesome-free/css/all.css";

class FilterButton extends Component {
  state = { showFilters: null, author: "" };
  render() {
    const { showFilters, author } = this.state;
    return (
      <div className="dropdown">
        <button
          onClick={() => {
            this.showFilters(!showFilters);
          }}
          id="filter-btn"
        >
          Filter <i className="fas fa-angle-down" />
        </button>
        {showFilters && (
          <ul id="secondary-button-holder">
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.props.filterBySelectedFilter(params);
              }}
              value="created_at"
            >
              Date Created
            </button>
            <br />
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.props.filterBySelectedFilter(params);
              }}
              value="comment_count"
            >
              Comment_count
            </button>
            <br />
            <button
              id="secondary-button"
              onClick={e => {
                const params = { sort_by: e.target.value };
                this.props.filterBySelectedFilter(params);
              }}
              value="votes"
            >
              Likes
            </button>
            <br />
            <button id="secondary-button" value="votes">
              Author:
              <input
                onChange={this.authorInput}
                placeholder="Valid Username"
                className="author-input"
              />
            </button>
            <button
              className="check-for-author-btn"
              onClick={e => {
                const params = { author };
                this.props.filterBySelectedFilter(params);
              }}
            >
              Check for Author
            </button>
          </ul>
        )}
      </div>
    );
  }

  authorInput = e => {
    this.setState({ author: e.target.value });
  };

  showFilters = bool => {
    this.setState({ showFilters: bool });
  };
}

export default FilterButton;
