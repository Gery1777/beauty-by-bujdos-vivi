import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import ShowCase from "./components/ShowCase";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//import CSS Files
import "./App.css";
import "./style/NavBar.css";
import "./style/Gallery.css";
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
        // Add visited class to section when it reaches more than 20% of the way of the height
        if (scrollY >= sectionTop - window.innerHeight * 0.8) {
          section.classList.add("visited");
        }
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
    // add initial load in case multiple sections are already visible onload
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <>
      <div id="opacityContainer" className=""></div>
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
      <ShowCase></ShowCase>
      <Gallery></Gallery>
      <Prices></Prices>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
