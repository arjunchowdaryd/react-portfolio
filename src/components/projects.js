import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ananya from './assets/ananya.png'
import beach from './assets/beach.png'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            
           <img src={ananya} color= '#fff' height= '259px'/>
            <CardText>
              <h5>project1</h5>
              <p>Ananya Engineers </p>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
       
              <a target="_blank" href="https://ananyaeliteproject.herokuapp.com"><Button colored> visitSite</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <img src={beach} color= '#fff' height= '259px'/>
            <CardText>
            <h5>project2</h5>
              <p>Beach-resort</p>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
       
              <a target="_blank" href="https://beachproject.herokuapp.com"><Button colored> visitSite</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#3</CardTitle>
            <CardText>
              coming soon ...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Visit Site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
  {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#4</CardTitle>
            <CardText>
              coming soon ...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Visit Site</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
           </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#1</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#2</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Visit Site</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#3</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
{/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#4</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#1</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#2</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#3</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
{/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#4</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
          </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#1</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#2</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#3</CardTitle>
          <CardText>
            coming soon ...
        </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
{/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >project#4</CardTitle>
          <CardText>
            coming soon ...
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
     
            <Button colored> visitSite</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
          </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Javascript</Tab>
          <Tab>NodeJs & MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
