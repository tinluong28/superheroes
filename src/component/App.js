import React, { Component } from "react";
import CharacterList from "../component/CharacterList";
import HeroList from "../component/HeroList";
import TeamStats from "../component/TeamStats";
import "../style/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">SuperSquad</h2>
        <div className="row">
          <div className="col-md-4">
            <CharacterList />
          </div>
          <div className="col-md-4">
            <HeroList />
          </div>
          <div className="col-md-4">
            <TeamStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
