import React, { useState } from 'react';
import './App.css';
import newReservationForm from './components/newReservationForm';
import { Form, Button, Card , Container, Navbar, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalendarComponent , ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import NewReservationForm from './components/newReservationForm';
import ReservationTable from './components/reservationTable';
//https://ej2.syncfusion.com/react/documentation/api/calendar/overview/
// das Beispiel zum Kalendar https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=calendar#/material/calendar/default
function App(this: any) {
  const [logInStatus , setLogIn] = useState(false);
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("")
  const [selectedDate , setSelectedDate] = useState(new Date ())

  function onchange(args: ChangedEventArgs): void {
    setSelectedDate(args.value!!)
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
          change={onchange}
          />
        <hr/>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Neue Reservierung</Accordion.Header>
            <Accordion.Body>
            <NewReservationForm date={selectedDate.toLocaleDateString()} user={userName}></NewReservationForm>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr/>
        <ReservationTable></ReservationTable>
      </Container>
    }
    </React.Fragment>
  );
}

export default App;
