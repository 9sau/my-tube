import React from "react";
import SearchBar from "./../components/SearchBar";

class App extends React.Component {
  onSearch = searchValue => {
    console.log(searchValue);
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
