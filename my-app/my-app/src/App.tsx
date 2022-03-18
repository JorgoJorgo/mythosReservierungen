import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [logInStatus , setLogIn] = useState(false);
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("")
  
  return (
    
    <React.Fragment>
    {!logInStatus &&
      <Card body className='middle'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Nutzername" onChange={(event)=> setUserName(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={(event)=> setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {if(password === "1" && userName === "1"){setLogIn(true)}}}>
          Log In
        </Button>
      </Form>
    </Card>
    }
    {logInStatus && 
      <p>geschafft</p>
    }
    </React.Fragment>
  );
}

export default App;
