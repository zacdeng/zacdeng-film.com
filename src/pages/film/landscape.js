import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./landscape.css";

function Landscape() {
  const photoInfos = [
    { src: "https://s2.loli.net/2025/04/26/vLHnhaRZFkWe7J5.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: "https://s2.loli.net/2025/04/26/tewZmaSHzTloUYb.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: 'https://s2.loli.net/2025/04/20/ncJgkM8vfHei6Qz.jpg', caption: "Del Valle Regional Park" },
    { src: 'https://s2.loli.net/2025/04/20/yJjhKrUDgBdR9zm.jpg', caption: "Del Valle Regional Park" },
    { src: 'https://s2.loli.net/2025/04/20/vto981nQWe4GxHa.jpg', caption: "Slackers Hill" },
    { src: 'https://s2.loli.net/2025/04/20/6s8Hv4IyVapOdFr.jpg', caption: "Old St. Hilary's Landmark" },
  ];

  const isMobile = useDevice();
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
    <div className={isMobile ? 'mobile-landscape-wrapper' : 'desktop-landscape-wrapper'}>
      <div className="landscape-grid">
        <div className="landscape-gallery-container">
          <div className="landscape-gallery-scroll">
            {
              photoInfos.map((photoInfo, index) => (
                <div className="landscape-photo-wrapper" key={index}> 
                  <img 
                    key={index} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`landscape-gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="landscape-photo-caption">{photoInfo.caption}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landscape