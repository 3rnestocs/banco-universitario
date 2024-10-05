import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Institutional from './pages/institutional/Institutional';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter basename="/banco-universitario">
      <Routes>
        <Route exact path="/banco-universitario" element={<Institutional />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
