import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./noirNotes.css";

function NoirNotes() {
  const photoInfos = [
    { src: 'https://s2.loli.net/2025/04/20/pDzFT7rOjv6nlc4.jpg', caption: "Hyatt Regency, Houston Downtown"},
    { src: 'https://s2.loli.net/2025/04/21/4BUEkKiSwJxaGdu.jpg', caption: "San Francisco" },
    { src: 'https://s2.loli.net/2025/04/21/LYw5WuCx2qpnIeV.jpg', caption: "Warming Hut Park Store" },
    { src: 'https://s2.loli.net/2025/04/21/Zl5vEAGyDNB1KSk.jpg', caption: "San Francisco" },
    
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
    <div className={isMobile ? 'mobile-noirnotes-wrapper' : 'desktop-noirnotes-wrapper'}>
      <div className="noirnotes-grid">
        <div className="noirnotes-gallery-container">
          <div className="noirnotes-gallery-scroll">
            {
              photoInfos.map((photoInfo, index) => (
                <div className="noirnotes-photo-wrapper" key={index}> 
                  <img 
                    key={index} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`noirnotes-gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="noirnotes-photo-caption">{photoInfo.caption}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoirNotes