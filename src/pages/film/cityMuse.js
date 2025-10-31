import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./cityMuse.css";

function CityMuse() {
  const photoInfos = [
    { src: 'https://s2.loli.net/2025/05/23/Li3spDufVR58yTz.jpg', caption: "Columbus Ave, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/TewQf3rancChUIY.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/yVM4cdm1zorNhi8.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/BMXsEzYyA3kCImF.jpg', caption: "Marin County Civic Center, San Rafael" },
    { src: 'https://s2.loli.net/2025/05/23/RaeDBMnv9P2Yhjp.jpg', caption: "Fort Mason, San Francisco" },
    { src: 'https://s2.loli.net/2025/04/20/ZlfRV7SADnq6QuL.jpg', caption: "Pit Room, Houston" },
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
    <div className={isMobile ? 'mobile-citymuse-wrapper' : 'desktop-citymuse-wrapper'}>
      <div className="cityMuse-grid">
        <div className="cityMuse-gallery-container">
          <div className="cityMuse-gallery-scroll">
            {
              photoInfos.map((photoInfo, index) => (
                <div className="cityMuse-photo-wrapper" key={index}> 
                  <img 
                    key={index} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`cityMuse-gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="cityMuse-photo-caption">{photoInfo.caption}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityMuse