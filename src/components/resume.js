import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import arjun from './assets/arjun.jpg'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={arjun}
                alt="avatar"
                className="avatar-img"
                 />
            </div>
            <h2 style={{paddingTop: '2em'}}>Dabbara Nagarjuna</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h4 style={{color: 'grey'}}>Full-Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h6> I am interested in IT and everything in its orbit.<br/> 
              I recently began to be fascinated by web programming, e.g.building websites.<br/> 
               Invited to join my uncle's start-up company as a Full-Stack Developer,<br/>  I gained experience of working in this area.<br/>  
            As this area complements my studies, I am keen to gain more experience <br/>  in the field. For this reason, I am looking for a company willing 
             to offer me a placement among their developers.<br/>  In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.</h6>
             <br/>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            <h3 style={{color: 'grey'}}>Additional skills</h3>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           <h3></h3>
           <h5>VCS:GitHub</h5>
           <h5>Buliders:Webpack and Gulp</h5>
           <h5>Services:Heroku and AWS</h5>
           <h5>Testing:Jest, Mocha, Karma and Cypress</h5>
           <h5>OS:linux and Windows</h5>
           <h5>C language</h5>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           
           
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2013}
              schoolName="My school"
              schoolDescription="Keshava Reddy Concept School,Tirupathi,Andhra Pradesh."
              percentage="85%"
               />

               <Education
                 startYear={2013}
                 endYear={2015}
                 schoolName="My College"
                 schoolDescription="Nalanda Junior College, Anantapur,Andhra Pradesh"
                 percentage="73%"
                  />
               
                <Education
                 startYear={2015}
                 endYear={2018}
                 schoolName="My University"
                 schoolDescription="Himalayan university"
                 branch="Bachelor of Computer applications(BCA)."
                 percentage="70%"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Freelancer"
              jobDescription=""
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="HTML5/CSS3"
                  progress={80}
                  />
                    <Skills
                  skill="SASS/CSS Flexbox,Grid"
                  progress={75}
                  />
             
              <Skills
                skill="JavascriptAdvanced"
                progress={100}
                />
                  <Skills
                      skill="Angular8"
                      progress={100}
                      />
                       <Skills
                      skill="ReactJS"
                      progress={100}
                      />
                       <Skills
                      skill="ReactJS& AngularJS material design"
                      progress={70}
                      />
                       <Skills
                    skill="NodeJS & MongoDB"
                    progress={100}
                    />
                      <Skills
                    skill="UnitTesting"
                    progress={80}
                    />
                      <Skills
                    skill="Deployment"
                    progress={100}
                    />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
