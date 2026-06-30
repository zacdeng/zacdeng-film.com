import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./home.css";

function Home() {
  const photoInfos_horizonal = [
    { src: 'https://files.seeusercontent.com/2026/06/29/wC5a/May-14-2026-DSCF4781.jpg', caption: 'Central Park, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/H6hc/May-17-2026-DSCF4873.jpg', caption: 'The Edge, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/v3Ua/May-17-2026-DSCF4962.jpg', caption: 'Staten Island Ferry, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4Qjd/November-24-2025-DSCF3908.jpg', caption: 'Top of the Rock, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/0Sve/May-14-2026-DSCF4725.jpg', caption: 'Manhattan Bridge, New York' },
    { src: "https://s2.loli.net/2025/10/30/vY37FW2dnCTV89N.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/cxLNqFahzytMf3A.jpg", caption: "Canyonlands, Utah" },
  ];

  const photoInfos_vertical = [
    { src: 'https://files.seeusercontent.com/2026/06/29/4Idm/May-14-2026-DSCF4778.jpg', caption: 'West Village, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4kpQ/May-14-2026-DSCF4756.jpg', caption: 'Grand Central Terminal, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/hy1D/May-17-2026-DSCF4986-2.jpg', caption: 'Chinatown' },
    { src: 'https://s2.loli.net/2025/05/23/Li3spDufVR58yTz.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://files.seeusercontent.com/2026/06/29/7Txi/November-24-2025-DSCF3872.jpg', caption: 'Chinatown, New York' },
    { src: 'https://s2.loli.net/2025/04/20/vto981nQWe4GxHa.jpg', caption: "Slackers Hill, San Francisco" },
    { src: 'https://s2.loli.net/2025/04/20/ncJgkM8vfHei6Qz.jpg', caption: "Del Valle Regional Park, Bay Area" },
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
    <div className={isMobile ? 'mobile-wrapper' : 'desktop-wrapper'}>
      <div className="home-grid">
        <div className="home-info">

          <div className="home-title">
            <a href="https://www.instagram.com/zacdeng.film/">
              <b>@zacdeng.film</b> 
              <img src="https://s2.loli.net/2022/06/03/Orq1ki4lMd2bDyo.png" width="20px" alt="ig"/> 
            </a>
          </div>

          <div className="gallery-container">
            <div className="gallery-scroll">
              {
                photoInfos_horizonal.map((photoInfo, index) => (
                  <div className="photo-wrapper" key={index}> 
                    <img 
                      key={index + 'h'} 
                      src={photoInfo.src}
                      alt={`Gallery ${index}`}
                      className={`gallery-image-h ${hoveredIndex === (index + 'h') ? 'scaled' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index + 'h')}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div className="photo-caption">{photoInfo.caption}</div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="gallery-container">
            <div className="gallery-scroll">
              {
                photoInfos_vertical.map((photoInfo, index) => (
                  <div className="photo-wrapper" key={index}> 
                    <img 
                      key={index + 'v'} 
                      src={photoInfo.src}
                      alt={`Gallery ${index}`}
                      className={`gallery-image-v ${hoveredIndex === (index + 'v') ? 'scaled' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index + 'v')}
                      onMouseLeave={handleMouseLeave}
                    />
                    <div className="photo-caption">{photoInfo.caption}</div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home