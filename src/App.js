import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Institutional from './pages/institutional/Institutional';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Institutional />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
