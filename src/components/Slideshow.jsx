'use client';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  { url: 'https://labour.gujarat.gov.in/images/eshram-banner.jpg' },
  { url: 'https://labour.gujarat.gov.in/images/ledmain/banner_rural_labour.jpg' },
  { url: 'https://labour.gujarat.gov.in/images/ledmain/banner_commi_labour.jpg' },
  { url: 'https://labour.gujarat.gov.in/images/ledmain/banner_mgli.jpg' },
  { url: 'https://labour.gujarat.gov.in/images/ledmain/banner_tranning.jpg' },
  { url: 'https://labour.gujarat.gov.in/images/ledmain/banner_dish.jpg' },
];

const Slideshow = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 overflow-hidden rounded-xl shadow-2xl">
      <Slide autoplay={true} duration={4000} transitionDuration={800} arrows indicators>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative w-full h-[500px] flex items-center justify-center">
            {/* Full-size Image */}
            <img
              src={slideImage.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
