import { BrowserRouter as Router } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import './App.css';

function App() {
  return (
    <Router>
      <Accueil/>
    </Router>
  );
}

export default App;