import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league : props.league,
      hometeam : props.hometeam,
      homescore : props.homescore,
      awayteam : props.awayteam,
      awayscore : props.awayscore,
      enabled : props.enabled,
      blockClasses : "score blockquote p-2"         
    }
  }

  onClick = () => {
    const currentEnabledState = this.state.enabled;
    this.setState({enabled: !currentEnabledState})
  }

  render() {
    return (
              <blockquote className={this.state.enabled ? "score blockquote p-2 enabled" : "score blockquote p-2"} style={{border: "1px solid black"}} onClick={this.onClick.bind()}>
                <div className="p-2" style={{border: "1px solid black"}}>
                  <strong>
                    {this.state.league}
                  </strong>
                  <div className="row">
                    <div className="col-sm-8">
                      <small className="text=muted">
                      <b>{this.state.hometeam}</b>
                        </small>
                    </div>
                    <div className="col-sm-2">
                      {this.state.homescore}
                    </div>
                  </div>
                  <div style={{borderTop: "1px solid gray"}}></div>
                  <div className="row">
                    <div className="col-sm-8">
                      <small className="text=muted">
                      <b>{this.state.awayteam}</b>
                        </small>
                    </div>
                    <div className="col-sm-2">
                      {this.state.awayscore}
                    </div>
                  </div>
                </div>                
              </blockquote>
    );
  }
}

export default Score;
