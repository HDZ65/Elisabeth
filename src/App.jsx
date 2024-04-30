import React  from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

const Accueil = React.lazy(() => import("./pages/Accueil"));
const Coaching = React.lazy(() => import("./pages/Coaching"));
const Ebook = React.lazy(() => import("./pages/Ebook"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/e-book" element={<Ebook />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;