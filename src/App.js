import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Filter from './components/Filter';
import Search from './components/Search';
import Table from './components/Table';

const App = () => {
  return (
    <Router>
      <div>
        <Filter />
        <Search />
        <Table />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;