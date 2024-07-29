import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import ShowCase from "./components/ShowCase";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import SlideShow from "./components/SlideShow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//import CSS Files
import "./App.css";
import "./style/NavBar.css";
import "./style/SlideShow.css";
import "./style/Components.css";

//Test files for trying out things
import Test from "./components/_Test";
import "./style/_Test.css";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.getElementById("navbar")!.clientHeight;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.clientHeight;
        const sectionId = section.id;
        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          setCurrentSection(sectionId);
          // Find the element with matching data-rr-ui-event-key
          const activeSection = document.querySelector(
            `[data-rr-ui-event-key="#${sectionId}"]`
          );
          if (activeSection) {
            // Update the element (replace with your desired logic)
            activeSection.classList.add("active"); // Example: Add an "active" class
          }
        } else {
          const inActiveSection = document.querySelector(
            `[data-rr-ui-event-key="#${sectionId}"]`
          );
          inActiveSection?.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <>
      <NavBar></NavBar>
      {/* <!-- Masthead--> */}
      <header className="masthead" id="home">
        <Header></Header>
      </header>
      {/* <!-- About Grid--> */}
      <section className="about bg-light text-center" id="about">
        <About></About>
      </section>
      {/* <!-- Image Showcases--> */}
      <section className="showcase" id="showcase">
        <ShowCase></ShowCase>
      </section>
      {/* <!-- SlideShow--git> */}
      <section className="text-white text-center" id="slideshow">
        <SlideShow></SlideShow>
      </section>
      {/* <!-- Prices--> */}
      <section className="price-list text-center bg-light" id="prices">
        <Prices></Prices>
      </section>
      {/* <!-- Testimonials--> */}
      {/* <section className="testimonials text-center" id="testimonials">
        <Testimonials></Testimonials>
      </section> */}
      {/* <!-- Contact--git> */}
      <section className="contact text-white text-center" id="contact">
        <Contact></Contact>
      </section>
      <footer className="footer bg-light">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default App;
