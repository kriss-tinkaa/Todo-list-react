import React, {useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import ListTodo from './components/ListTodo/ListTodo';
import { Container } from 'react-bootstrap'

function App() {

   const [todo, setTodo] = useState([
     {
       id: 1,
       title: 'first todo',
       status: true,
     },
     {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: 'third todo',
      status: false,
    }
   ])
  return (
    <Container>
      <Header />
      <main className='main'>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ListTodo todo={todo} setTodo={setTodo} />
      </main>
    </Container>
  );
}



export default App;
