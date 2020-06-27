import React, { Component } from 'react';
import Score from './../Score/Score.js'

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores : []
    };

    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ scores : [
      {
        league : "R.M.L.",
        hometeam : "Southern Goonz",
        homescore : "391.5",
        awayteam : "Bama BlackOut",
        awayscore : "288",
        enabled : false        
      },
      {
        league : "Greatest League",
        hometeam : "The Goonsquad",
        homescore : "92",
        awayteam : "Chips and Dip",
        awayscore : "65",
        enabled : false  
      },
      {
        league : "Can't Beat Us",
        hometeam : "Columbus Goonz",
        homescore : "155",
        awayteam : "Inner City Hittaz",
        awayscore : "105",
        enabled : false  
      },
    ]
  });
}

handleToggleChange = (name) => {
  var updatedScores = [];

  this.state.scores.map((score, index) => {
    if(score.league === name) {
      score.enabled = true;
    }
    else{
      score.enabled = false;
    }
    updatedScores[index] = score;
  });

  this.setState({scores : updatedScores})
  
}

  render() {

    const scores = [];

    this.state.scores.map((score, index) => {
      scores.push(<Score key={index} {...score} onToggleChange={this.handleToggleChange}/>)
    });
    
    return (scores);
  }
}

export default Scores;
