import { useState } from 'react';
import "./mediumFormat.css"

function MediumFormat() {
  const photoUrls = [
    { src: "https://s2.loli.net/2025/04/26/vLHnhaRZFkWe7J5.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: "https://s2.loli.net/2025/04/26/tewZmaSHzTloUYb.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: "https://s2.loli.net/2025/04/26/awsOJ8HKtiqDz5Q.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: "https://s2.loli.net/2025/05/23/Ex3YvjlF8ZsrWnN.jpg", caption: "Pier 39, SF" },
    { src: "https://s2.loli.net/2025/05/23/rbDuOgxc8tMJf35.jpg", caption: "Sunnyvale Bay Trail, Sunnyvale" },
    { src: "https://s2.loli.net/2025/05/23/toIHQDhea3qlSrk.jpg", caption: "Sunnyvale Bay Trail, Sunnyvale" },
    { src: "https://s2.loli.net/2025/05/23/hFNQU4ZJVWDdawj.jpg", caption: "Sunnyvale Bay Trail, Sunnyvale" },
    { src: "https://s2.loli.net/2025/05/23/xMVSw4vNqUk2udI.jpg", caption: "Sunnyvale Bay Trail, Sunnyvale" },
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
    <div className="mediumFormat-container">
      <div className="mediumFormat-grid">
        <div className="mediumFormat-info">
          <h3>Stillness in Squares <img src="https://s2.loli.net/2025/04/28/dk2YijFWgtMDnUZ.png" width="28px" alt="instant"/> </h3>
          <p>This section is dedicated to my work with 120mm medium format film, all captured using the Bronica SQA — a beautifully crafted mechanical camera that rewards patience and precision. 
            Shooting with 120mm film isn't about speed or convenience; it's about slowing down and being intentional with each frame. With only 12 exposures per roll, 
            every shot counts, and that constraint adds a quiet discipline to the way I compose, focus, and see.</p>

          <p>The larger negative size of medium format film offers incredible depth, detail, and tonality. Shadows breathe, highlights glow, 
            and the subtle textures of everyday scenes come to life with a richness that digital often flattens. 
            Whether I'm capturing light filtering through trees, still corners of a street, or fleeting expressions, the Bronica allows me to experience photography in its most tactile and deliberate form.</p>

          <p>These images are not just documents — they're meditations. A slower shutter, a heavier frame, and a softer pace. That's the beauty of 120mm.</p>
        </div>
        <div className="mediumFormat-gallery-container">
          {
            photoUrls.map((photoUrl, index) => (
              <div className="mediumFormat-gallery-photo" key={index}> 
                <img 
                  key={index} 
                  src={photoUrl.src}
                  alt={`Gallery ${index}`}
                  className={`mediumFormat-gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
                <div className="mediumFormat-photo-caption">{photoUrl.caption}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MediumFormat