import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions/index";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4 className="group">Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(character => (
            <li className="list-group-item" key={character.id}>
              <div className="list-item">{character.name}</div>
              <div
                className="list-item right-button"
                onClick={() => this.props.addCharacterById(character.id)}
              >
                <button className="btn btm-sm btn-primary">+</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

export default connect(
  mapStateToProps,
  { addCharacterById }
)(CharacterList);
