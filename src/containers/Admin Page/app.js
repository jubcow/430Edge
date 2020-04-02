import React from "react";
import {Button} from 'react-bootstrap';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Admin Page</h1>
      <h2></h2>
      <Button variant="outline-primary">Create Account</Button>{' '}
      <Button variant="outline-primary">Delete Account</Button>{' '}
      <Button variant="outline-primary">Sign Off on Tasks</Button>{' '}
      <Button variant="outline-primary">Disable account</Button>{' '}
      <Button variant="outline-primary">Generate Report</Button>{' '}
      <Button variant="outline-primary">Accounts</Button>{' '}
      <Button variant="outline-primary">Log out</Button>{' '}
    </div>
  );
}

