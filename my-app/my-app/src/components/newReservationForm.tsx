import React, { FC } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

interface formProps {
    date: string;
}

function NewReservationForm(props: formProps) {
    return (
        <div>
            
            <Card style={{}}>
                <Card.Body>
                    <Card.Title>Neue Reservierung hinzufügen</Card.Title>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Datum</b></Form.Label>
                            <Form.Control placeholder={props.date} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label><b>Name</b></Form.Label>
                            <Form.Control type="string" placeholder="Namen eintragen" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPersonen">
                            <Form.Label>Personen</Form.Label>
                            <Form.Control type="string" placeholder="Personen" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUhrzeit">
                            <Form.Label><b>Uhrzeit</b></Form.Label>
                            <Form.Control type="string" placeholder="Uhrzeit" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTelefon">
                            <Form.Label><b>Telefon</b></Form.Label>
                            <Form.Control type="string" placeholder="Telefon" />
                        </Form.Group>
                        <Button variant="success" type="submit" style={{ width: '100%' }}>
                            +
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );

}

export default NewReservationForm;