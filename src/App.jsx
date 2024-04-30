import React  from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

const Accueil = React.lazy(() => import("./pages/Accueil"));


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />

        </Routes>
    </Router>
  );
}

export default App;