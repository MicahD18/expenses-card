import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ExpenseCard } from './components';

const App = () => {
    return (
      <div className="App">
        <ExpenseCard />
      </div>
    );
}

export default App;
