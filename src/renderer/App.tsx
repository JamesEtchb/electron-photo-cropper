import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Hello  from './components/Hello';
import Photo from './components/Photo';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </Router>
  );
}
