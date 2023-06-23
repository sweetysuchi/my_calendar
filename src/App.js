import React from 'react';
import Calendar from './Calendar';
import './App.css';

const App = () => {
  const someDate = new Date(); 
  console.log(someDate)
 

  return (
    <div className="app">
      <h1>Calendar App</h1>
      <Calendar date={someDate} />
    </div>
  );
};

export default App;
