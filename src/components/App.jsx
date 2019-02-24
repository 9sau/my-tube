import React from "react";
import SearchBar from "./../components/SearchBar";
import youtube from "./../api/youtube.api";
class App extends React.Component {
  onSearch = searchValue => {
    console.log(searchValue);
    youtube.get("/search", {
      params: { q: searchValue }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
