import React, { Component } from 'react';
import { Route, BrowserRouter, Switch,Redirect,Link,Router } from 'react-router-dom';
import profileImage from '../../Assets/profileImageCropped.jpg';
import Typist from 'react-typist';
import About from '../About/about';
import { MDBContainer, MDBRow, MDBCol,MDBView,MDBMask, MDBBtn } from "mdbreact";
import './home.css'
class Home extends Component {
 
    render(){
        return(

            <MDBContainer className="Home">
            <MDBRow>
              <MDBCol xl="12">
                <img src={profileImage} className="img-fluid profile" alt="" />
                <h1 className="name" >Sohardh Chobera</h1>
              </MDBCol>
            </MDBRow>
            
            <MDBRow className="nav">
            
                <MDBCol md="3"className="about"><Link to='/about'></Link>About</MDBCol>
                <MDBCol md="3" className="skills">Skills</MDBCol>
                <MDBCol md="3" className="blogs">Blogs</MDBCol>

                <MDBCol md="3" className="glossary">Glossary</MDBCol>
            </MDBRow>
            <MDBRow xl="12">
              
            <Typist className="firstLine">
                <Typist.Delay ms={1000}/>
                Hi!, I'm Sohardh<br/>
                <Typist.Delay ms={1000}/>
                This website is all about what I am upto and what are my plans, skills and projects.<br/>
                <Typist.Delay ms={1000}/>
                This website is a great way for me to dump my ideas so that I can share with everyone.<br/>
                <Typist.Delay ms={1000}/>
                I will be including a blog section, where you can also share anything with me by leaving a comment.<br/>
            
                
                
            </Typist>
            </MDBRow>
           
             <Switch>
                 <Route path='/about' component={About} />
             </Switch>


          </MDBContainer>


 
         
        );
    }
    
}
export default Home;