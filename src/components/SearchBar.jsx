import React from "react";

class SearchBar extends React.Component {
  state = { searchValue: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchValue);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchValue}
            onChange={e => this.setState({ searchValue: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
