import React, { useState } from "react";
import "./style.css";

const reviews = [
  {
    text: "Our team struggled with keeping financial records updated across departments. Now, we collaborate in one place, and everyone has access to real-time data. It's a game-changer!",
    author: "JOHN CARTER",
    role: "ROLE, COMPANY",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e738075645cee7fbae-image-testimonial-1-crypto-template-jpg@2x.png"
  },
  {
    text: "Before using this service, I spent hours manually recording transactions. Now, everything is automated, accurate, and available in real-time. It's like having a full-time accountant without the cost!",
    author: "LAURA M.",
    role: "SMALL BUSINESS OWNER",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e73807562a93e7fbad-image-testimonial-3-crypto-template-jpg@2x.png"
  },
  {
    text: "Managing our growing business finances was a nightmare. This tool automatically categorizes expenses, making tax season stress-free. We always know where our money is going!",
    author: "REBECCA Y.",
    role: "STARTUP FOUNDER",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e738075645cee7fbae-image-testimonial-1-crypto-template-jpg-1@2x.png"
  },
  {
    text: "Our team struggled with keeping financial records updated across departments. Now, we collaborate in one place, and everyone has access to real-time data. It's a game-changer!",
    author: "JOHN CARTER",
    role: "ROLE, COMPANY",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e738075635e8e7fbac-image-testimonial-2-crypto-template-jpg@2x.png"
  }
];

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews">
      <div className="heading">
        <div className="text-wrapper-36">What our users say?</div>
      </div>
      <div className="carousel">
        <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <p className="text-wrapper-37">{review.text}</p>
              <div className="div-21">
                <div className="img-wrapper">
                  <img className="img-2" alt={review.author} src={review.image} />
                </div>
                <div className="div-22">
                  <div className="text-wrapper-38">{review.author}</div>
                  <div className="text-wrapper-39">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}></button>
        <button className="carousel-button next" onClick={nextSlide}></button>
      </div>
      <div className="paggination">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`show-slide-of ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
