import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ResponsiveCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imagesList = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
    "/img/8.png",
    "/img/10.png",
    "/img/11.png",
    "/img/12.png",
    "/img/13.png",
    "/img/14.png",
    "/img/15.png",
    "/img/16.png",
    "/img/17.png",
    "/img/18.png",
    "/img/19.png",
    "/img/20.png",
    "/img/21.png",
  ];

  return (
    <div className="styles.homeExpo">
      <h1>Examples of the Art you will find in this event</h1>
      <Carousel width={"35%"} styles={{ alignSelf: "center", textAlign: "center", }} >
        {imagesList.map((el, index) => {
          return (
            <div key={index}>
              <img src={el} className={styles.thumbnail} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ResponsiveCarousel;
