import React from 'react';
import './App.css';
import LeagueHeader from './LeagueHeader/LeagueHeader.js'
import LeagueTitle from './LeagueTitle/LeagueTitle.js'
import LeaguePage from './LeaguePage/LeaguePage.js'
import LeagueScores from './LeagueScores/LeagueScores.js'
import Scores from './Scores/Scores.js'
import News from './News/News.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <LeagueHeader />
        <LeagueTitle title="A.P. Goes Off" week="In Week 15!!!"/>
        <br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <News />
            </div>
            <div className="col-sm-8">
              <LeaguePage />
            </div>
            <div className="col-sm-2">
              <Scores />
            </div>
          </div>
        </div>
        <br/>
        <LeagueScores />
    </div>     
      
      
      
      
      
      
      
      
      
      
      
      
      /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Main />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

  );
}

export default App;
