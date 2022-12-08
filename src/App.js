import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.StrictMode>
      <div className="main">
        <NavBar/>
      <Header />


        <div className="container">
          <TodoInput/>
          <TodoList/>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
