import React from 'react'
import Table from 'react-bootstrap/Table';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Tabel() {
  return (
    <>
   <Container>
      <Row>
        <Col style={{backgroundColor: "red"}} sm={2}>sm=8</Col>
        <Col style={{backgroundColor: "pink"}}sm={8}>sm=4</Col>
        <Col style={{backgroundColor: "yellow"}} sm={2}>sm=8</Col>
      </Row>
    </Container>


     <Button variant="primary">Add</Button>{' '} 
     <Button variant="danger">Delete</Button>{' '}
     <Stack direction="horizontal" gap={1}>
      <Form.Control placeholder="Search..." />
      </Stack>
      <div className="container" >
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>@apa</td>
      </tr>
    </tbody>
  </Table>
  </div>
  </>
  )
}
