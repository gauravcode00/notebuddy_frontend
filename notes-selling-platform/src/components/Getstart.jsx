import React from "react";
import HeroSection from "./getstartComp/HeroSection";
import AboutUs from "./getstartComp/Aboutus";
import ContactUs from "./getstartComp/ContactUs";
import Footer from "./Footer";
import Particles from "./animations/Particles";

const Getstart = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Getstart;
