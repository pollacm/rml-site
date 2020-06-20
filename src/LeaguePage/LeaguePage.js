import React, { Component } from 'react';

class LeaguePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      imageSub: '',
      height: '',
    };  
  }

  render() {
    return (

      <div class="collumn">        
        <img class="media" style={{height: "400px"}} src="https://media.giphy.com/media/1zRd80ADPNmIjYNHHy/giphy.gif" alt="" />
        <figcaption class="figcaption">Hermine hoping for courage.</figcaption>
        The sunset faded to twilight before anything further happened. The crowd far away on the left, towards Woking, seemed to grow, and I heard now a faint murmur from it. The little knot of people towards Chobham dispersed. There was scarcely an intimation of movement from the pit.        
        {/* <figure class="figure">
          <img class="media" src="https://i.giphy.com/PW7MoTD2d9pJK.gif" alt="">
          <figcaption class="figcaption">Hermine hoping for courage.</figcaption>
        </figure> */}
        <p>It was this, as much as anything, that gave people courage, and I suppose the new arrivals from Woking also helped to restore confidence. At any rate, as the dusk came on a slow, intermittent movement upon the sand pits began, a movement that seemed to gather force as the stillness of the evening about the cylinder remained unbroken. Vertical black figures in twos and threes would advance, stop, watch, and advance again, spreading out as they did so in a thin irregular crescent that promised to enclose the pit in its attenuated horns. I, too, on my side began to move towards the pit.</p>
        <p>Then I saw some cabmen and others had walked boldly into the sand pits, and heard the clatter of hoofs and the gride of wheels. I saw a lad trundling off the barrow of apples. And then, within thirty yards of the pit, advancing from the direction of Horsell, I noted a little black knot of men, the foremost of whom was waving a white flag.</p>
      </div>



      // <div>
      //   <div className="head">
      //     <div className="headerobjectswrapper">             
      //         <header>A.P. Goes Off</header>
      //     </div>
      //     <div>________________</div>
      //     <div>__</div>          

      //     {// <div className="subhead">York, MA - Thursday August 30, 1978 - Seven Pages</div> }
      //   </div>
      // </div>
    );
  }
}

export default LeaguePage;
