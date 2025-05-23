import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./cityMuse.css";

function CityMuse() {
  const photoInfos = [
    { src: 'https://s2.loli.net/2025/05/23/Li3spDufVR58yTz.jpg', caption: "Columbus Ave, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/TewQf3rancChUIY.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/ronpfqtWLydHZV3.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/yVM4cdm1zorNhi8.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/uS3tyDF8JCIE1dQ.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/Q3SvTxVeKqi2CAD.jpg', caption: "Pier 39, San Francisco" },

    { src: 'https://s2.loli.net/2025/05/23/OQKYacSWFEiArmu.jpg', caption: "Marin County Civic Center, San Rafael" },
    { src: 'https://s2.loli.net/2025/05/23/BMXsEzYyA3kCImF.jpg', caption: "Marin County Civic Center, San Rafael" },
    { src: 'https://s2.loli.net/2025/05/23/WNDgfM4Q38lRToU.jpg', caption: "Marin County Civic Center, San Rafael" },
    { src: 'https://s2.loli.net/2025/05/23/94QaWlzvJ6XAfwr.jpg', caption: "Marina Green, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/hZPpsuifFj5cl71.jpg', caption: "Pier 39, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/B9VIuTy3Wz7qF1x.jpg', caption: "Marina Green, San Francisco" },

    { src: 'https://s2.loli.net/2025/05/23/zUCyRB3V4Ehmu5k.jpg', caption: "Pier 39, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/RaeDBMnv9P2Yhjp.jpg', caption: "Fort Mason, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/tp3218zMOTkfAIq.jpg', caption: "Transamerica Pyramid, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/TdkXiR7Bvb3rHxO.jpg', caption: "Saints Peter and Paul Church, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/xH7afEoqbGkevUB.jpg', caption: "Saints Peter and Paul Church, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/2o6RtdQ4X8eGwCD.jpg', caption: "Pier 43, Houston" },

    { src: 'https://s2.loli.net/2025/05/23/LmIctrqv9sW7wSM.jpg', caption: "Pier 43, San Francisco" },
    { src: 'https://s2.loli.net/2025/04/20/nF83zVtQ4up5WRL.jpg', caption: "The Museum of Fine Arts, San Francisco" },
    { src: 'https://s2.loli.net/2025/04/20/ZlfRV7SADnq6QuL.jpg', caption: "Pit Room, Houston" },
    { src: 'https://s2.loli.net/2025/04/20/IK8PAuyQ6ahGr2q.jpg', caption: "Chapel of St. Basil, Houston" },
    { src: 'https://s2.loli.net/2025/04/23/amNUq6IFAKiwXJu.jpg', caption: "Chapel of St. Basil, Houston" },
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