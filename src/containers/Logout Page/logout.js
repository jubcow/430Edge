import React from "react";
import jsCookie from "js-cookie";
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {
constructor(props) {
    super(props);
    jsCookie.remove('fullname');
    jsCookie.remove("status");
   
  }


  render(){
    const that = this;
    return(
       <Redirect to='/login' />
    )
  }

}
export default Logout;
