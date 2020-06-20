import React, { Component } from 'react';
import NewsSnippet from './../NewsSnippet/NewsSnippet.js'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news : []
    };
  }

  componentDidMount() {
    this.setState({ news : [
      {
        name : "A.P.",
        headline : "A.P. Balls Out This Week",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget"
      },
      {
        name : "Tom Brady",
        headline : " eu nisl nunc. Inte",
        blurb: "a et pharetra pharetra massa. Sed enim ut sem viverra aliquet. Praesent eleme. a et pharetra pharetra massa. Sed enim ut sem viverra aliquet. Praesent eleme"
      },
      {
        name : "Randall Cobb",
        headline : "Sit amet nisl suscipit adipiscing bi",
        blurb: "is risus sed vulputate odio ut enim blandit volutpat. Egestas sed tempus urna et pharetra pharetra. Ac tincidunt vitae semper quis lectus nulla at volutpat."
      },
      {
        name : "David Johnson",
        headline : "vivamus. Accumsan tortor posuer",
        blurb: "ectetur a erat nam at. At quis risus sed vulputate odio ut enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit. In vitae turpis massa sed elementum tempus. Sed blandit libero volutpat sed cras ornare arcu dui"
      },
      {
        name : "A.J. Green",
        headline : "porttitor massa id. Diam phasellus vestibulum l",
        blurb: "ar proin gravida. Nunc pulvinar sapien et ligula. Amet justo donec enim diam vulputate ut. Euismod lacinia at quis risus sed vulputate odio. Leo duis ut diam quam nulla"
      }
    ]
  });
}
  

  render() {
    const newsSnippets = [];

    this.state.news.map((snippet, index) => {
      newsSnippets.push(<NewsSnippet key={index} {...snippet}/>)
    });
    
    return (newsSnippets);
  }
}

export default News;
