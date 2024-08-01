import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Images data
interface ImageData {
  Nails: string[];
  Hair: string[];
  Makeup: string[];
  Events: string[];
}
const imageData: ImageData = {
  Nails: [
    "https://www.byrdie.com/thmb/2Lg7FKDftcfDQJepPsvczhtOq5s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yournailsbutbetter-ede9fc1f96924daf9ed96e6e2d5fda57.png",
    "https://www.instyle.com/thmb/xweHAUb8ivCC_86Z3fy3RRnPlYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/020422-Coffin-Nail-Shape-Designs-Lead-2000-49c35703b04c4f78a4a725bb10d1f8a6.jpg",
    "https://media.allure.com/photos/64c2cb65d622318fcbd802fa/16:9/w_1920%2Cc_limit/Allure_Fall_2023_Nail_Trends_Bold_Ombre_22942.jpg",
  ],
  Makeup: [
    "https://cdn.britannica.com/35/222035-131-9FC95B31/makeup-cosmetics.jpg",
    "https://images.ctfassets.net/u4vv676b8z52/3OYeHyRL4qz1LzLjxW0bWC/2cdea093cb11c18f0960cee4fb2361e4/eye-makeup-678x446.gif?fm=jpg&q=80",
    "https://aaftonline.com/blog/wp-content/uploads/2024/01/Advantages-of-Makeup-Complete-Overview.png",
    // ... other images for "Makeup" category
  ],
  Hair: [
    "https://www.oklahoman.com/gcdn/-mm-/d8d0774057d19139d16e6ede624d76e89947662d/c=1-0-1365-767/local/-/media/2021/03/24/USATODAY/usatsports/247WallSt.com-247WS-855605-imageForEntry1-4l4.jpg?width=1364&height=767&fit=crop&format=pjpg&auto=webp",
    "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    "https://www.ogleschool.edu/wp-content/uploads/2019/09/hairdressing-in-cosmetology.jpg",
    "https://d6bvpt6ekkwt0.cloudfront.net/563cd769ca2f3a16528b4568/photo-1562322140-8baeececf3df.jpg?1590672314",
    // ... other images for "Hair" category
  ],
  Events: [
    "https://www.mbmmakeupstudio.com/wp-content/uploads/2022/07/bridal-makeup-artist.jpg",
    "https://thatfestivallife.com/wp-content/uploads/2017/06/festival-makeup-artist.jpg",
    // ... other images for "Events" category
  ],
};
// Gallery
function Gallery() {
  const [images, setImages] = useState(
    imageData.Nails.concat(
      imageData.Events,
      imageData.Hair,
      imageData.Makeup,
      imageData.Nails
    )
  );
  const [filter, setFilter] = useState("all");
  const handleFilterChange = (value: string) => {
    setFilter(value);
    if (value == "all") {
      setImages(
        imageData.Nails.concat(
          imageData.Events,
          imageData.Hair,
          imageData.Makeup,
          imageData.Nails
        )
      );
    } else if (value == "Nails") {
      setImages(imageData.Nails);
    } else if (value == "Makeup") {
      setImages(imageData.Makeup);
    } else if (value == "Hair") {
      setImages(imageData.Hair);
    } else if (value == "Events") {
      setImages(imageData.Events);
    }
  };
  //Reset to the first picture whenever new category is selected
  const [selectedItem, setSelectedItem] = useState(0);
  const [key, setKey] = useState(0);
  useEffect(() => {
    setSelectedItem(0);
    setKey(key + 1);
  }, [images]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="col-3" style={{ display: "flex" }}></div>
        <div className="col-6">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              className={`btn btn-small filter-button ${
                filter === "all" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={`btn filter-button ${
                filter === "Nails" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("Nails")}
            >
              Nails
            </button>
            <button
              className={`btn filter-button ${
                filter === "Makeup" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("Makeup")}
            >
              Makeup
            </button>
            <button
              className={`btn filter-button ${
                filter === "Hair" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("Hair")}
            >
              Hair
            </button>
            <button
              className={`btn filter-button ${
                filter === "Events" ? "active" : ""
              }`}
              onClick={() => handleFilterChange("Events")}
            >
              Events
            </button>
          </div>
          <Carousel
            key={key}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            transitionTime={1000}
            selectedItem={selectedItem}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default Gallery;
