import React from 'react';
import './App.css';
import HomePage from './containers/Homepage/HomePage.js';
import StudentPage from './containers/Student Page/StudentPage';

// redirects to different pages
function App() {
  return (
    <div>
      <StudentPage />
    </div>
  );
}

export default App;
