import React, { useState } from "react";

const GalleryModal = ({ media, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMedia = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const nextMedia = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div className="gallery-container">
          <button className="prev-btn" onClick={prevMedia}>
            ❮
          </button>

          {/* Render image or video based on media type */}
          {media[currentIndex].type === "image" ? (
            <img
              src={media[currentIndex].src}
              alt="Project"
              className="gallery-media"
            />
          ) : (
            <video controls className="gallery-media">
              <source src={media[currentIndex].src} type="video/mp4" />
              Vaš brskalnik ne podpira predvajanja videa.
            </video>
          )}

          <button className="next-btn" onClick={nextMedia}>
            ❯
          </button>
        </div>

        {/* Add Description in Slovenian */}
        <div className="gallery-description">
          <p>{media[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
