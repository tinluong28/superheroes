import React, { Component } from "react";
import { connect } from "react-redux";

class TeamStats extends Component {
  overallStats = () => {
    let overall = {
      strength: 0,
      intelligence: 0,
      speed: 0
    };
    this.props.heroes.forEach(hero => {
      overall.strength += hero.strength;
      overall.intelligence += hero.intelligence;
      overall.speed += hero.speed;
    });
    return overall;
  };
  render() {
    let Stats;
    if (this.props.heroes.length > 0) {
      Stats = (
        <ul className="list-group">
          <li className="list-group-item">
            <p className="list-item">
              Overall Strength: {this.overallStats().strength}
            </p>
          </li>
          <li className="list-group-item">
            <p className="list-item">
              Overall Intelligence: {this.overallStats().intelligence}
            </p>
          </li>
          <li className="list-group-item">
            <p className="list-item">
              Overall Speed: {this.overallStats().speed}
            </p>
          </li>
        </ul>
      );
    }
    return (
      <div>
        <h4 className="group">Team Stats</h4>
        {Stats}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  };
};
export default connect(
  mapStateToProps,
  null
)(TeamStats);
