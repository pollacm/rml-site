import React, { Component } from 'react';
import { thisExpression, isProperty } from '@babel/types';

class Score extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this, props.league);
  }

  handleToggle(e) {
    this.props.onToggleChange(e);
  }  

  render() {
    return (
              <blockquote className={this.props.enabled ? "score blockquote p-2 enabled" : "score blockquote p-2"} style={{border: "1px solid black"}} onClick={this.handleToggle}>
                <div className="p-2" style={{border: "1px solid black"}}>
                  <strong>
                    {this.props.league}
                  </strong>
                  <div className="row">
                    <div className="col-sm-8">
                      <small className="text=muted">
                      <b>{this.props.hometeam}</b>
                        </small>
                    </div>
                    <div className="col-sm-2">
                      {this.props.homescore}
                    </div>
                  </div>
                  <div style={{borderTop: "1px solid gray"}}></div>
                  <div className="row">
                    <div className="col-sm-8">
                      <small className="text=muted">
                      <b>{this.props.awayteam}</b>
                        </small>
                    </div>
                    <div className="col-sm-2">
                      {this.props.awayscore}
                    </div>
                  </div>
                </div>                
              </blockquote>
    );
  }
}

export default Score;
