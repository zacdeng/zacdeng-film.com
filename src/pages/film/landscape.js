import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./landscape.css";

function Landscape() {
  const photoInfos_horizonal = [
    { src: "https://s2.loli.net/2025/10/30/roy41OSgIcafETs.jpg", caption: "Brees Lookout, California" },
    { src: "https://s2.loli.net/2025/10/30/vY37FW2dnCTV89N.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/2yCdWu6BqD8jl94.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/cxLNqFahzytMf3A.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/tHlSE31Ofx5sA8g.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/yXbLjQongvr5EiZ.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/okUAyJ3pZBaSIn8.jpg", caption: "Bryce Canyon, Utah" },
    { src: "https://s2.loli.net/2025/10/30/pKZ1ntXuvQ82lY4.jpg", caption: "Bryce Canyon, Utah" },
    { src: "https://s2.loli.net/2025/10/31/pn3krO6qzRebG9C.jpg", caption: "Morro Bay, California" },
    { src: "https://s2.loli.net/2025/10/31/Ul1kb9iSL6gGJtf.jpg", caption: "Morro Bay, California" },
    { src: "https://s2.loli.net/2025/10/31/R9H53ryIfspBQg8.jpg", caption: "Morro Bay, California" },
    { src: "https://s2.loli.net/2025/11/01/cDZPC1QhXvkHpUu.jpg", caption: "Mono Lake, California" },
  ];

  const photoInfos_vertical = [
    { src: 'https://s2.loli.net/2025/04/20/ncJgkM8vfHei6Qz.jpg', caption: "Del Valle Regional Park, California" },
    { src: 'https://s2.loli.net/2025/04/20/yJjhKrUDgBdR9zm.jpg', caption: "Del Valle Regional Park, California" },
    { src: 'https://s2.loli.net/2025/04/20/vto981nQWe4GxHa.jpg', caption: "Slackers Hill, San Francisco" },
    { src: 'https://s2.loli.net/2025/04/20/6s8Hv4IyVapOdFr.jpg', caption: "Old St. Hilary's Landmark, San Francisco" },
    { src: "https://s2.loli.net/2025/11/01/haeGnOUuKYcH7qz.jpg", caption: "Brees Lookout, California" },
    { src: "https://s2.loli.net/2025/11/01/MKIGAspo2CcQWJr.jpg", caption: "Brees Lookout, California" },
    { src: "https://s2.loli.net/2025/04/26/tewZmaSHzTloUYb.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: "https://s2.loli.net/2025/11/01/p6oBJqVruabOd43.jpg", caption: "Bryce Canyon, Utah" },
  ]

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
              photoInfos_horizonal.map((photoInfo, index) => (
                <div className="landscape-photo-wrapper" key={index + 'h'}> 
                  <img 
                    key={index + 'h'} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`landscape-gallery-image-h ${hoveredIndex === (index + 'h') ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 'h')}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="landscape-photo-caption">{photoInfo.caption}</div>
                </div>
              ))
            }
          </div>
          <div className="landscape-gallery-scroll">
            {
              photoInfos_vertical.map((photoInfo, index) => (
                <div className="landscape-photo-wrapper" key={index + 'v'}> 
                  <img 
                    key={index + 'v'} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`landscape-gallery-image-v ${hoveredIndex === (index + 'v') ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 'v')}
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