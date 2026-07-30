import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: ""
  };

  getSearch = e => {
    this.setState({ search: e.target.value });
  };

  /**
   * The 2019 version put this on the button's onClick and left the button as
   * type="submit" inside a <form> with no onSubmit handler, so every search also
   * triggered a native form submission and reloaded the page. Handling submit and
   * calling preventDefault fixes that, and makes the Enter key work as well.
   */
  onSearch = e => {
    e.preventDefault();
    this.props.onSearch(this.state.search);
  };

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
        <input
          onChange={this.getSearch}
          value={this.state.search}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
