import React, { useState, useEffect } from "react";
import "./style.css";

const reviews = [
  {
    text: "Our team struggled with keeping financial records updated across departments. Now, we collaborate in one place, and everyone has access to real-time data. It's a game-changer!",
    author: "JOHN CARTER",
    role: "ENTREPRENEUR",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e738075635e8e7fbac-image-testimonial-2-crypto-template-jpg@2x.png"
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
    text: "Tracking expenses and managing invoices used to be overwhelming. This software simplified everything, and now I can focus on growing my business instead of drowning in paperwork.",
    author: "MICHAEL D.",
    role: "ENTREPRENEUR",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e73807562a93e7fbad-image-testimonial-3-crypto-template-jpg@2x.png"
  },
  {
    text: "I was skeptical at first, but this tool has completely transformed our budgeting process. Real-time insights have helped us cut unnecessary expenses and boost our savings!",
    author: "SOPHIA L.",
    role: "FINANCIAL ANALYST",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e738075645cee7fbae-image-testimonial-1-crypto-template-jpg-1@2x.png"
  },
  {
    text: "As a freelancer, keeping track of my income and expenses was a mess. This app makes it so easy to generate reports, and tax time is no longer stressful!",
    author: "JASON K.",
    role: "FREELANCE DESIGNER",
    image: "https://c.animaapp.com/W9MUR0Mj/img/60e4a1e738075635e8e7fbac-image-testimonial-2-crypto-template-jpg@2x.png"
  }
];

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(1);

  // Dynamically set the number of reviews per slide based on screen size
  useEffect(() => {
    const updateReviewsPerSlide = () => {
      if (window.innerWidth >= 1200) {
        setReviewsPerSlide(3); // Show 3 reviews per slide on large screens
      } else if (window.innerWidth >= 768) {
        setReviewsPerSlide(2); // Show 2 reviews per slide on tablets
      } else {
        setReviewsPerSlide(1); // Show 1 review per slide on small screens
      }
    };

    updateReviewsPerSlide();
    window.addEventListener("resize", updateReviewsPerSlide);
    return () => window.removeEventListener("resize", updateReviewsPerSlide);
  }, []);

  // Group reviews into slides
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, reviewsPerSlide]);

  return (
    <div className="reviews">
      <div className="heading">
        <div className="text-wrapper-36">What our users say?</div>
      </div>
      <div className="carousel">
        <div
          className="carousel-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            display: "flex",
            width: `${totalSlides * 100}%`
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="slide">
              {reviews
                .slice(slideIndex * reviewsPerSlide, (slideIndex + 1) * reviewsPerSlide)
                .map((review, index) => (
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
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
        <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="paggination">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`show-slide-of ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
