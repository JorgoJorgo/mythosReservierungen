import React, { FC } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { reservation } from './reservationTable';
import Table from 'react-bootstrap/Table'
/**
 * 
 * {    
 *      date : "12.12.12",
        user: "Jorgo",
        table : "14",
        guests: "23",
        time : "17:45"
        }
 */
//man kann auf die reservierungen draufdrücken um zu sehen von wem , telefon und verändern / löschen
function ReservationRow(reservation: reservation) {
    return (
        
            <tr>
                    <td>{reservation.time}</td>
                    <td>{reservation.name}</td>
                    <td>{reservation.guests}</td>
                    <td>{reservation.table}</td>
            </tr>

    );

}

export default ReservationRow;