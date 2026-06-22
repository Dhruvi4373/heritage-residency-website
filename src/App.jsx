import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import Home from '@pages/Home';
import PropertyPage from '@pages/PropertyPage';
import Contact from '@pages/Contact';
import ScrollToTop from '@components/common/ScrollToTop';

function App() {
  useEffect(() => {
    // Polyfill for Intersection Observer
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      import('intersection-observer');
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:propertyId" element={<PropertyPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
