import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./home.css";

function Home() {
  const photoInfos_horizonal = [
    { src: "https://s2.loli.net/2025/10/30/vY37FW2dnCTV89N.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/roy41OSgIcafETs.jpg", caption: "Brees Lookout, California" },
    { src: "https://s2.loli.net/2025/10/30/cxLNqFahzytMf3A.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/2yCdWu6BqD8jl94.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/okUAyJ3pZBaSIn8.jpg", caption: "Bryce Canyon, Utah" },
  ];

  const photoInfos_vertical = [
    { src: 'https://s2.loli.net/2025/04/20/vto981nQWe4GxHa.jpg', caption: "Slackers Hill" },
    { src: 'https://s2.loli.net/2025/04/20/ncJgkM8vfHei6Qz.jpg', caption: "Del Valle Regional Park" },
    { src: 'https://s2.loli.net/2025/05/23/RaeDBMnv9P2Yhjp.jpg', caption: "Fort Mason, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/Li3spDufVR58yTz.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/BMXsEzYyA3kCImF.jpg', caption: "Marin County Civic Center, San Rafael" },
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