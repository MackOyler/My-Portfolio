import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import HwProj from './components/hardware/HwProj';

const App = () => {
  const location = useLocation();
  const isHwProjPage = location.pathname === "/hwproj";

  return (
    <>
      {!isHwProjPage && <Header />}
      {!isHwProjPage && <Nav />}
      <Routes>
        <Route exact path="/" element={
          <>
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/hwproj" element={<HwProj />} />
      </Routes>
      {!isHwProjPage && <Footer />}
    </>
  );
}

export default App;
