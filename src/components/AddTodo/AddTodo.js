import React, {useState} from 'react'
import {Row, Col, Button, Form} from 'react-bootstrap'
import s from './AddTodo.module.css'

function AddTodo({todo, setTodo}) {

  const [value, setValue] = useState('');
  console.log(value);

  function saveTodo(){
    setTodo(
      [...todo, {
        id: 5,
        title: value,
        status: true,
      }]
    )
  }
  return (
    <Row>
      <Col className="d-flex">
        <Form.Control type="text" placeholder='Type text' value={value} onChange={ (e) => setValue(e.target.value) }/>
        <Button onClick={saveTodo} variant="outline-success">Save</Button>
      </Col>
    </Row>
  )
}

export default AddTodo