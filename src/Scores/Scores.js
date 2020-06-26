import React, { Component } from 'react';
import Score from './../Score/Score.js'

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores : []
    };
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

toggle = (name) => {
  var score = this.state.scores.filter((e) => e.league === name);
  const currentEnabledState = score.enabled;
  this.setState({enabled: !currentEnabledState})
}

  render() {

    const scores = [];

    this.state.scores.map((score, index) => {
      scores.push(<Score key={index} {...score}/>)
    });
    
    return (scores);
  }
}

export default Scores;
