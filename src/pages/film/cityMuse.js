import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./cityMuse.css";

function CityMuse() {
  const photoInfos = [
    { src: 'https://s2.loli.net/2025/04/20/nF83zVtQ4up5WRL.jpg', caption: "The Museum of Fine Arts, Houston" },
    { src: 'https://s2.loli.net/2025/04/20/ZlfRV7SADnq6QuL.jpg', caption: "Pit Room, Houston" },
    { src: 'https://s2.loli.net/2025/04/20/JxfuLVpAbEeFSUK.jpg', caption: "The Museum of Fine Arts, Houston" },
    { src: 'https://s2.loli.net/2025/04/20/IK8PAuyQ6ahGr2q.jpg', caption: "Chapel of St. Basil, Houston" },
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