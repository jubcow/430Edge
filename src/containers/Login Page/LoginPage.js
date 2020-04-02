import React from 'react';
import {getLogin} from '../lib/utils.js';
import Button from 'react-bootstrap/Button';
import {IoIosArrowDropleftCircle} from "react-icons/io";
import Form from 'react-bootstrap/Form';
import jsCookie from "js-cookie";
import {Redirect} from 'react-router-dom';
import "./LoginPage.css";


// login/logout page

class LoginPage extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        type: ""

    }
    
  }

  async handleUserEmailUpdate(evt){
     this.setState({email: evt.target.value});
  }

  async handlePasswordUpdate(evt){
     this.setState({password: evt.target.value});
  }
  
 
 async handleSearch(evt) {

 
  const loggedInUser = await getLogin({
    email: this.state.email,
    password: this.state.password
  });
  this.setState({ loggedInUser });
  console.log(loggedInUser);
  if (loggedInUser.status === "success") {
   console.log(loggedInUser);
   console.log(loggedInUser.name);
   jsCookie.set("fullname", loggedInUser.name);
   jsCookie.set("status","success");
    if(loggedInUser.type === "Student"){
       this.setState({type: "Student"});
    }
    else if(loggedInUser.type === "Admin"){
       this.setState({type: "Admin"});
    }
    
  }
 
}

getResult(thing){

 if(thing.status === "no email"){
    return(
      this.state.loggedInUser.message
    )
}
else if(thing.status === "not successful"){
  return(
     this.state.loggedInUser.message
  )
}
}

 render() { 
    
  
   if (this.state.type === "Student") {
     console.log(jsCookie.get("fullname"));
      return <Redirect to='/student' />
    }

  else if(this.state.type === "Admin"){
    
     return <Redirect to='/admin' />
  }
/*
  else if(this.state.type === "Reset"){
     return <Redirect to='/reset' />
  }
*/

  return ( <div>
    <body>
    
      <a href="/"><IoIosArrowDropleftCircle className="gi-5x iconLocation"/></a>
      

      <div className="square centered"> 
      <h2 className="gi-5x color h1Location">Sign In</h2>

      <Form.Group className="form width">
  <Form.Control size="lg" type="text"  value={this.state.email} onChange={this.handleUserEmailUpdate.bind(this)} placeholder="UMW Email" required/>
  <br/>
  
  <Form.Control size="lg" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordUpdate.bind(this)} required/>
</Form.Group>
<Button variant="dark" onClick={this.handleSearch.bind(this)} className ="buttonStyle buttonLocation1 ">Login</Button>{' '}
<h3 className="h3Location">OR</h3>
<a href="/reset"><Button variant="dark"  className="buttonStyle buttonLocation2">Reset Password</Button>{' '}</a>
  
       {this.state.loggedInUser ? <div className="style styleLocation"> 
      {this.getResult(this.state.loggedInUser)}
    </div> : null}
     
      <br /> <br />
      
    

      
      </div>
     


    </body>
  
  
      
    
    <style jsx>{`
    .structure{
          position:absolute;
            top: 54%;
            left: 48%;
            margin-right: -50%;
             transform: translate(-50%, -50%);
             font-size: 30px;
             color: blue;
             font-weight: bold;
    }
    
     h2{
        position:absolute;
            top: 29%;
            left: 50%;
            margin-right: -50%;
             transform: translate(-50%, -50%);
             font-size: 30px;
    }
    }
     .linkStyle{
            padding-right: 10px;
          marginRight: 15;
          marginLeft: 15;
          color:  DarkBlue;
          text-decoration: underline;
          display: block;
          font: "Lucida Console";
          font-size: 25px;

          font-weight:bold;
          display: block;
            position:absolute;
            top: 10%;
            left: 10%;
            margin-right: -50%;
             transform: translate(-50%, -50%);

             
        }

        .linkStyle2{
            padding-right: 10px;
          marginRight: 15;
          marginLeft: 15;
          color: DarkBlue;
          font-weight: 750;
          text-decoration: underline;
          display: block;
          font: "Lucida Console";
          font-size: 25px;

          display: block;
            position:absolute;
            top: 10%;
            left: 20%;
            margin-right: -50%;
             transform: translate(-50%, -50%);

             
        }


          .linkStyle3{
            padding-right: 10px;
          marginRight: 15;
          marginLeft: 15;
          color:  DarkBlue;
          text-decoration: underline;
          display: block;
          font: "Lucida Console";
          font-size: 25px;

          font-weight:bold;
          display: block;
            position:absolute;
            top: 10%;
            left: 30%;
            margin-right: -50%;
             transform: translate(-50%, -50%);

             
        }
        .linkStyle4{
         background-color: PaleVioletRed;
              textAlign: center;
              color: black;
              width: 100px;
              font-family: "Arial";
              display: block;
              width: 180px;
              margin: auto auto;
              position: absolute;
              top: 75%;
              left: 25%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              font-size: 25px;
        }
        .header h2{
            font-family: Courier;
            
            display: block;
            position:absolute;
            top: 13%;
            left: 47%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
           
          }

          .header img{
          
             display: block;
               position:absolute;
               top: 8%;
               left: 47%;
               margin-right: -50%;
               transform: translate(-50%, -50%);
               border-radius: 50%;
          }

          h1,
          h2,
          a,
          p {
            font-family: "Arial";
          }

          .button-style{
              cursor: pointer;
              background-color: LightSlateGray;
              textAlign: center;
              color: black;
              width: 100px;
              font-family: "Arial";
              display: block;
              margin: auto auto;
              position: absolute;
              top: 70%;
              left: 60%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              font-size: 25px;
            
         

          }

          .header {
            background-color: LightSeaGreen;
            min-height: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
            height: 150px;
            
          }
        
         
        `}</style>
      </div>

);
  }
}





export default LoginPage;