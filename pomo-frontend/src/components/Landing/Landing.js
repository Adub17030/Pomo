import React, {Component} from 'react';
import Banner from '../Banner/Banner.jsx';



class Landing extends Component{


    render() {
        return (
            <div>
        <Banner></Banner>
        <section class="section">
  <h1 class="title">Section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>
</div>
        )
    }


}

export default Landing;