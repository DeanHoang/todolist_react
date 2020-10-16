import React from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

class App extends React.Component {
  render(){
  return (
    <div className="todo-app">      
        <TodoList/>
    </div>
  );
}}

export default App;
