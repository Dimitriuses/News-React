import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import NewsList from "./Components/NewsList/NewsList";
import APIClient from "./APIClient";
import newsSnapshot from "./newsSnapshot";

/**
 * Where the headlines come from.
 *
 * In 2019 this was always a live newsapi.org call, with the key hardcoded into
 * APIClient.js. The key has been removed, so with none configured the app serves the
 * twelve headlines from 26 September 2019 that the original kept in App.js's initial
 * state and then stopped reading. Pass a key to fetch live news again.
 */
function loadNews(apiKey, country = "us") {
  if (!apiKey) {
    // Snapshot images are repo-relative, so they have to be resolved against the
    // deployment's base path -- "/News-React" on GitHub Pages, "" in development.
    return Promise.resolve(
      newsSnapshot.map(article => ({
        ...article,
        urlToImage: `${process.env.PUBLIC_URL}/${article.urlToImage}`
      }))
    );
  }
  return new APIClient(apiKey)
    .getTopHeadlines(country)
    .then(({ articles }) => articles);
}

class App extends Component {
  state = {
    list: [],
    findNews: "",
    error: null
  };

  componentDidMount() {
    this.mounted = true;
    loadNews()
      .then(list => this.mounted && this.setState({ list }))
      .catch(error => this.mounted && this.setState({ error: error.message }));
  }

  componentWillUnmount() {
    // Without this, a component unmounted before loadNews() settles gets a state update
    // and React warns about a leak -- which is exactly what App.test.js does.
    this.mounted = false;
  }

  onSearch = searchName => {
    this.setState({ findNews: searchName });
  };

  onShowNews = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter(
      item => item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  };

  render() {
    const showNews = this.onShowNews(this.state.list, this.state.findNews);

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header onSearch={this.onSearch} />
        {this.state.error && (
          <div className="alert alert-warning m-3" role="alert">
            Could not load headlines: {this.state.error}
          </div>
        )}
        <Switch>
          <Route path="/" exact render={() => <NewsList List={showNews} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
