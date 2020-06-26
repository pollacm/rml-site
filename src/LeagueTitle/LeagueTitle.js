import React, { Component } from 'react';

export default class LeagueTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : this.props.title,
      week : this.props.week
    };
  }

  

  render() {    
    return (
      <div>
        <div className="head">
          <div className="headerobjectswrapper">             
              <header>{this.state.title}</header>
          </div>
        </div>
        <div className="collumn" style={{marginBottom: "0"}}>
          <div className="head">
            <p style={{marginBottom: "0"}}>
                <span className="headline hl6">{this.state.week}</span>
            </p>
          </div>
        </div>
        {/* <div className="head">
          <div className="headerobjectswrapper">             
              <header>A.P. Goes Off</header>
          </div>
          <div>________________</div>
          <div>__</div>          

          {// <div className="subhead">York, MA - Thursday August 30, 1978 - Seven Pages</div> }
        </div> */}
      </div>
    );
  }
}

