import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  state = {
    monsters: [],
    searhcField: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searhcField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searhcField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster RoboHash</h1>
        <SearchBox placeholder = 'Search Monsters'
                    handleChange = {(e) => this.setState({ searhcField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
