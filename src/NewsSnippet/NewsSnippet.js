import React, { Component } from 'react';

export default class NewsSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.name,
      headline : props.headline,
      blurb : props.blurb

    }
  }
  render() {
    return (
           <div className="card p-2">
            <blockquote className="blockquote mb-0 card-body">
            <p style={{marginBottom: "2px"}}><b>{this.state.name}</b></p>
            <footer className="blockquote-footer">
              <small className="text-muted">
              <b>{this.state.headline}</b> <br/>
              <cite title="Source Title">{this.state.blurb}</cite>
              </small>
            </footer>
            </blockquote>
          </div>
    )
  }
}
