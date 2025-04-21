import { useState } from 'react';
import "./mediumFormat.css"

function MediumFormat() {
  const horizontalPhotoUrls = [

  ];

  const verticalPhotoUrls = [

  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setTimeout(() => {
      setHoveredIndex(index);
    }, 500); // 0.5 second
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="instant-container">
      <div className="instant-grid">
        <div className="instant-info">
          <h3>Stillness in Squares - 120mm</h3>
          <p>This section is dedicated to my work with 120mm medium format film, all captured using the Bronica SQA — a beautifully crafted mechanical camera that rewards patience and precision. 
            Shooting with 120mm film isn't about speed or convenience; it's about slowing down and being intentional with each frame. With only 12 exposures per roll, 
            every shot counts, and that constraint adds a quiet discipline to the way I compose, focus, and see.</p>

          <p>The larger negative size of medium format film offers incredible depth, detail, and tonality. Shadows breathe, highlights glow, 
            and the subtle textures of everyday scenes come to life with a richness that digital often flattens. 
            Whether I'm capturing light filtering through trees, still corners of a street, or fleeting expressions, the Bronica allows me to experience photography in its most tactile and deliberate form.</p>

          <p>These images are not just documents — they're meditations. A slower shutter, a heavier frame, and a softer pace. That's the beauty of 120mm.</p>
        </div>
        
        <div className="instant-gallery-container">
          <p>Currently working on scanning the 120mm films, images are coming soon...</p>
          <div className="gallery-vertical">
            {
              horizontalPhotoUrls.map((photoUrl, index) => (
                <img 
                  key={index} 
                  src={photoUrl}
                  alt={`Gallery Horizontal ${index}`}
                  className={`gallery-image-horizontal ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            }
          </div>

          <div className="gallery-horizontal">
            {
              verticalPhotoUrls.map((photoUrl, index) => (
                <img 
                  key={index} 
                  src={photoUrl}
                  alt={`Gallery Vertical ${index}`}
                  className={`gallery-image-vertical ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediumFormat