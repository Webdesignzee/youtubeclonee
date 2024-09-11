
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/home/home';
import Video from './pages/video/video'; // Assuming Video.js is in the pages/video folder

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

*/

import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/home/home';
import Video from './pages/video/video';

export default function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/') {
      // If the current path is not the home page, navigate to the home page
      window.location.href = '/';
    }
  }, []);

  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current);
  }, [window.location.pathname]);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Video />} />
      </Routes>
    </Router>
  );
}
