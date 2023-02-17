import React from 'react'
import Table from 'react-bootstrap/Table';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
export default function Tabel() {
  return (
    <>

     <Button className="ms-2 mb-3 mt-3" variant="primary">Add</Button>{' '} 
     <Button className="ms-2 mb-3 mt-3" variant="danger">Delete</Button>{' '}
     <Stack direction="horizontal" gap={1}>
      <Form.Control className="ms-2 mb-4 mt-2" placeholder="Search..." style={{width: '30%'}} />
      </Stack>
      <div className="container" style={{ maxWidth: "80%" }}>
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
