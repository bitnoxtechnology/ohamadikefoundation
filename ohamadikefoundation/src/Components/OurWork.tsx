"use client";

import { workImages } from "../Data/Work";
import "../Styles/Work.css";

const OurWork = () => {
  return (
    <section className="work-section">
      <h2>Pictures of our work</h2>

      <div className="work-images-grid">
        {workImages.map((image, index) => (
          <div key={index} className="work-image-wrapper">
            <img src={image.src} alt={image.alt} className="work-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
