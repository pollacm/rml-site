import React, { Component } from 'react';

class LeagueScore extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeTeam : this.props.homeTeam,
      homeScore : this.props.homeScore,
      awayTeam : this.props.awayTeam,
      awayScore : this.props.awayScore,
    };
  }
  render() {

    return (
      <div style={{width: "200px", textAlign: "left", padding: "3px", float: "left"}}>
        <div>
          {this.state.homeTeam} <div style={{float: "right"}}>{this.state.homeScore}</div>
        </div>
        <div>
          {this.state.awayTeam} <div style={{float: "right"}}>{this.state.awayScore}</div>
        </div>
      </div>
    );
  }
}

export default LeagueScore;
