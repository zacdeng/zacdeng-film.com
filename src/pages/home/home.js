import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./home.css";

function Home() {
  const photoInfos = [
    { src: "https://s2.loli.net/2025/04/26/vLHnhaRZFkWe7J5.jpg", caption: "Shark Fin Cove, Santa Cruz" },
    { src: 'https://s2.loli.net/2025/04/20/ncJgkM8vfHei6Qz.jpg', caption: "Del Valle Regional Park" },
    { src: 'https://s2.loli.net/2025/04/20/vto981nQWe4GxHa.jpg', caption: "Slackers Hill" },
    { src: "https://s2.loli.net/2025/05/23/toIHQDhea3qlSrk.jpg", caption: "Sunnyvale Bay Trail" },
    { src: 'https://s2.loli.net/2025/05/23/RaeDBMnv9P2Yhjp.jpg', caption: "Fort Mason, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/94QaWlzvJ6XAfwr.jpg', caption: "Fort Mason, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/Li3spDufVR58yTz.jpg', caption: "Chinatown, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/BMXsEzYyA3kCImF.jpg', caption: "Marin County Civic Center, San Rafael" },
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
                photoInfos.map((photoInfo, index) => (
                  <div className="photo-wrapper" key={index}> 
                    <img 
                      key={index} 
                      src={photoInfo.src}
                      alt={`Gallery ${index}`}
                      className={`gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
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