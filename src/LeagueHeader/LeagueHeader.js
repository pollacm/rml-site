import React, { Component } from 'react';
import './LeagueHeader.css'
class LeagueHeader extends Component {
  render() {
    return (
    <div className="banner">
      <div className="container">
        <div className="banner-text">
          <div className="banner-heading">
            R.M.L.
          </div>
          {/* <div className="banner-sub-heading">
            Here goes the secondary heading on hero banner
          </div> */}
        </div>
      </div>
    </div>
    );
  }
}

export default LeagueHeader;
