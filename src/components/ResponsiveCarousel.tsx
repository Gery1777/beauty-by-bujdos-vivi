import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
//Filters

function Filters() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn filter-button" data-filter="all">
          All
        </button>
        <button className="btn filter-button" data-filter="Nails">
          Nails
        </button>
        <button className="btn filter-button" data-filter="Makeup">
          Makeup
        </button>
        <button className="btn filter-button" data-filter="Hair">
          Hair
        </button>
        <button className="btn filter-button" data-filter="Events">
          Events
        </button>
      </div>
    </>
  );
}

//Carrousel
const HeartImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
const HandImages = [
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
];
const ScissorsImages = [
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
let images = HandImages;

function ResponsiveCarousel() {
  return (
    <>
      <Carousel
        showStatus={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        transitionTime={1000}
      >
        {images.map((image, index) => (
          <>
            <img
              key={index}
              src={image}
              // style={{ width: "500px", height: "300px" }}
            />
          </>
        ))}
      </Carousel>
    </>
  );
}

//Gallery
export default function Gallery() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="col-3" style={{ display: "flex" }}></div>
        <div className="col-6">
          <Filters></Filters>
          <ResponsiveCarousel></ResponsiveCarousel>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}
