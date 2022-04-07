import React, { FC } from 'react';
import { Button, Card, Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

interface reservation {
    date: string;
    user: string;
    table : string;
    guests: string;
    time : string;
}

function ReservationTable(/*props: formProps*/) {
    const mockReservations : reservation[] = [
        {date : "12.12.12",
        user: "Jorgo",
        table : "14",
        guests: "23",
        time : "17:45"
        },
        {date : "12.12.12",
        user: "Jorgo",
        table : "14",
        guests: "23",
        time : "17:45"
        },
        {date : "12.12.12",
        user: "Jorgo",
        table : "14",
        guests: "23",
        time : "17:45"
        }
    ]
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Uhrzeit</th>
                    <th>Name</th>
                    <th>Personen</th>
                    <th>Tisch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>19:30</td>
                    <td>Karamoussanlis</td>
                    <td>30</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td>Karamoussanlis</td>
                    <td>30</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td>Karamoussanlis</td>
                    <td>30</td>
                    <td>24</td>
                </tr>
            </tbody>
        </Table>
    );

}

export default ReservationTable;