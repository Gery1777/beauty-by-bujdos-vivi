import React, { useState, useRef, useEffect } from "react";

interface PriceListItemProps {
  id: Number;
  title: string;
  price: Number;
  description: string;
}
const PriceListItem = ({
  id,
  title,
  price,
  description,
}: PriceListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    //first close all items before toggleing
    const priceListItemContainer = document.getElementsByClassName(
      "vstack price-list-item-container"
    )!;
    const priceListItemDescription = document.getElementsByClassName(
      "price-list-item-description"
    )!;
    for (let i = 0; i < priceListItemContainer.length; i++) {
      const container = priceListItemContainer[i];
      const description = priceListItemDescription[i];
      container.classList.remove("show");
      description.classList.remove("show");
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`vstack price-list-item-container ${isExpanded ? "show" : ""}`}
      onClick={handleExpand}
    >
      <div
        className="hstack price-list-item-header"
        style={{ justifyContent: "space-between" }}
      >
        <b>{title}</b>
        <p className="m-0">{price.toString()} HUF</p>
      </div>
      <div
        key={id.toString()}
        className={`price-list-item-description ${isExpanded ? "show" : ""}`}
      >
        <p className="m-0 figure-caption">{description}</p>
      </div>
    </div>
  );
};

const priceListItems = [
  // köröm kezelések
  {
    name: "Köröm kezelések",
    img: "https://media.allure.com/photos/64c2cb65d622318fcbd802fa/16:9/w_1920%2Cc_limit/Allure_Fall_2023_Nail_Trends_Bold_Ombre_22942.jpg",
    items: [
      {
        id: 1,
        title: "KÖRÖM RESZELÉS",
        price: 6000,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate eros non tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        title: "KÖRÖMRÁGÁS",
        price: 5000,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        title: "VASKAROM",
        price: 7000,
        description:
          "Lorem ipsum dolor sit amet, vulputate eros non tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  // fodrászati kezelések
  {
    name: "Fodrászati kezelések",
    img: "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
    items: [
      {
        id: 1,
        title: "GÉPI HAJVÁGÁS",
        price: 4500,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate eros non tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        title: "KÉZI HAJVÁGÁS",
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        title: "KOMBINÁLT HAJVÁGÁS",
        price: 2300,
        description:
          "Lorem ipsum dolor sit amet, vulputate eros non tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  // kozmetikai kezelések
  {
    name: "Kozmetikai kezelések",
    img: "https://cdn.britannica.com/35/222035-131-9FC95B31/makeup-cosmetics.jpg",
    items: [
      {
        id: 1,
        title: "ARC PAKOLÁS",
        price: 8700,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum vulputate eros non tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        title: "ARCMASSZÁZS",
        price: 5000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
];
export default function Test() {
  return (
    <>
      <h1>Árlista</h1>
      <div className="container mt-4 price-list-container">
        <div className="row">
          {priceListItems.map((category) => (
            <div className="col-lg-4 mt-4">
              <h4>{category.name}</h4>
              <hr></hr>
              <div className="vstack">
                {category.items.map((item, index) => (
                  <PriceListItem {...item}></PriceListItem>
                ))}
              </div>
              <div className="product-list-image-container">
                <img className="product-list-image" src={category.img} />
              </div>
            </div>
          ))}
        </div>
        <div className="row row-product-list-image-container mt-4">
          {priceListItems.map((category) => (
            <div className="col-lg-4 mb-4">
              <img className="product-list-image" src={category.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
