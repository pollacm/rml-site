import React, { Component } from 'react';
import LeagueScore from './../LeagueScore/LeagueScore.js'

export default class LeagueScores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueScores : []
    }
  }
  
  componentDidMount()
  {
    this.setState({leagueScores : [
      {
        homeTeam: "Bama BlackOut",
        homeScore: "316",
        awayTeam: "Southern Goonz",
        awayScore: "521"
      },
      {
        homeTeam: "Invisible Juice",
        homeScore: "391",
        awayTeam: "TOO EASY",
        awayScore: "215"
      },
      {
        homeTeam: "Bama BlackOut",
        homeScore: "316",
        awayTeam: "Southern Goonz",
        awayScore: "521"
      },
      {
        homeTeam: "Invisible Juice",
        homeScore: "391",
        awayTeam: "TOO EASY",
        awayScore: "215"
      },
      {
        homeTeam: "Bama BlackOut",
        homeScore: "316",
        awayTeam: "Southern Goonz",
        awayScore: "521"
      },

    ]});
  }

  render() {
    const scores = [];

    this.state.leagueScores.map((score, index) => {      
      scores.push(<span key={index}><LeagueScore key={index} {...score} />
        {index < this.state.leagueScores.length - 1 ? 
          <div style={{borderLeft: "2px solid white", float: "left", height: "54px", margin: "2px"}}></div>: "" 
        }</span>)
    });
    
    return (
            <div className="fixed-div" style={{backgroundColor: "black", color: "white", fontWeight: "bold", borderRadius: "5px"}}>
              {scores}
            </div>
          );
  }
}