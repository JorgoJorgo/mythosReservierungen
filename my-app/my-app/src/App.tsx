import React, { useState } from 'react';
import './App.css';
import newReservationForm from './components/newReservationForm';
import { Form, Button, Card , Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import NewReservationForm from './components/newReservationForm';
//https://ej2.syncfusion.com/react/documentation/api/calendar/overview/
function App() {
  const [logInStatus , setLogIn] = useState(false);
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("")
  const [selectedDate , setSelectedDate] = useState(new Date ())
  const handleCalenderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(
      
    );
  };

  function getYesterdayDate() : string{
    const a = new Date(new Date().getTime() - 24*60*60*1000);
    
    return a.toLocaleDateString()
  }
  
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
          <Form.Control type="password" placeholder="Passwort" name="password" onChange={(event)=> setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {if(password === "1" && userName === "1"){setLogIn(true)}}}>
          Log In
        </Button>
      </Form>
    </Card>
    }
    {logInStatus && 
      <Container>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand>
              <img
                src="/mythoslogo.png"
                className='logo'
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <CalendarComponent 
          id='calendar'
          className='middle'
          min={new Date()}
          value = {new Date()}
          onClick={(event) =>  
            {
                console.log(this.value)
            }
          }
          onChange={console.log("hallo")}
          />
        <hr/>
        <NewReservationForm date= {getYesterdayDate()}></NewReservationForm>
      </Container>
      
    }
    </React.Fragment>
  );
}

export default App;
