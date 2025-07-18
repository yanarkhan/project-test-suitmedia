import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Ideas from './pages/Ideas';
import Placeholder from './pages/Placeholder';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default redirect to ideas */}
        <Route path="/" element={<Navigate to="/ideas" replace />} />
        
        {/* Ideas page */}
        <Route path="/ideas" element={<Ideas />} />
        
        {/* Placeholder pages */}
        <Route path="/work" element={<Placeholder />} />
        <Route path="/about" element={<Placeholder />} />
        <Route path="/services" element={<Placeholder />} />
        <Route path="/careers" element={<Placeholder />} />
        <Route path="/contact" element={<Placeholder />} />
        
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;