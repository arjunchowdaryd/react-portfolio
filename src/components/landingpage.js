import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import arjun from './assets/arjun.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={arjun}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>MERN Full Stack Web Developer</h1>
            <hr/>

          <p>HTML/CSS | SASS | Bootstrap | JavaScript | React | React & Angular Material design | Angular8  NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nagarjuna-chowdary-525451194/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/arjunchowdaryd" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
         </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
