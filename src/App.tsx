import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GoUpButton from './components/GoUpButton/GoUpButton';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsConditions from './pages/Legal/TermsConditions';
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';
import Careers from './pages/Careers/Careers';
// import Listing from './pages/Listing/Listing';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />; // Show loader before content loads
    }

    return (
        <>
            <div className="hidden md:block">
                <CustomCursor />
            </div>
            <ScrollToTop />
            <GoUpButton />
            <div className="md:cursor-space flex flex-col min-h-screen justify-between">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    {/* <Route path="/listing" element={<Listing /> } /> */}
                    <Route path="/team" element={<Team />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
