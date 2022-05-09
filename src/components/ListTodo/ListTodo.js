import React, {useState } from 'react'
import  './ListTodo.css'
import {Row, Col, Button, Form} from 'react-bootstrap'


function ListTodo({todo, setTodo}) {
    const [edit, setEdit] = useState('')
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo) 
    }
    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }
    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status;
            }
            return item;
        })
        setTodo(newTodo);
    }
    function saveTodo(id){
        let newTodo = [...todo].map(item  => {
            if(item.id == id){
                item.title = value;
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

  return (
    <div>
        {
            todo.map(item => (
                <div key={item.id} className='list-item'>
                    {
                        edit == item.id ? 
                        <div>
                            <Form.Control type="text" value={value} onChange={ (e)=> setValue(e.target.value) } />
                            
                        </div>
                        :
                        <div>{item.title} </div>
                       
                    }
                    {
                        edit == item.id ?
                        <div>
                            <Button variant="success" onClick={() => saveTodo(item.id)}>Update</Button>
                        </div>
                        :
                        <div>
                            <Button variant="outline-success" onClick={() => deleteTodo(item.id)}>Remove</Button>
                            <Button variant="outline-success" onClick={() => editTodo(item.id, item.title)}>Edit</Button>
                            <Button variant="danger" onClick={() => statusTodo(item.id)}>Close / Open</Button>
                        </div>
                    }
                    
                </div>
               
            ))
        }
    </div>
  )
}

export default ListTodo