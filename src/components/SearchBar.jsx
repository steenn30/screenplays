import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <section className="section">
        <div className="section__header">
          <h2>Search the library</h2>
          <p>Find scripts by title, author, or genre.</p>
        </div>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search scripts or authors"
            value={this.state.query}
            onChange={this.handleChange}
            aria-label="Search scripts"
          />
          <button className="button button--primary" type="button">
            Search
          </button>
        </div>
      </section>
    );
  }
}

export default SearchBar;
