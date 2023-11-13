"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import image from "../../public/placeholder.png";
import Image from "next/image";

const items = [
  {
    src: image.src,
    altText: "Slide 1",
    title: "Slide 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas in arcu ac feugiat. Sed ultrices turpis augue, ac condimentum nisi aliquet et.",
    key: 1,
  },
  {
    src: image.src,
    altText: "Slide 2",
    title: "Slide 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas in arcu ac feugiat. Sed ultrices turpis augue, ac condimentum nisi aliquet et.",
    key: 2,
  },
  {
    src: image.src,
    altText: "Slide 3",
    title: "Slide 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas in arcu ac feugiat. Sed ultrices turpis augue, ac condimentum nisi aliquet et.",
    key: 3,
  },
];

function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
          }}
        >
          <Image
            src={item.src}
            alt={item.altText}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <CarouselCaption captionText={item.text} captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} dark>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={(index) => goToIndex(index)}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default MainCarousel;
