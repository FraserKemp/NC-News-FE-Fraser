import React, { Component } from 'react';
import axios from 'axios';
import GetTopics from './TopicsList';
import './TopicsPage.css';

class TopicsPage extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    const url = 'https://fk-news-app.herokuapp.com/api/topics';
    axios.get(url).then(({ data: { topics } }) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <div>
        <ul id="topics-container">
          {topics.map((topic, i) => {
            return <GetTopics key={`topic${i}`} topic={topic} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TopicsPage;
