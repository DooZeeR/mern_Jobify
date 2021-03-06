import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Dashboard, Register, Error } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;










{/* <nav>
      <Link to='/'>Dashboard</Link> 
      <Link to='/register'>Register</Link> 
      <Link to='/landing'>Landing</Link> 
    </nav> */}