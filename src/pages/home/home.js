import { useState } from 'react';
import "./home.css";

function Home() {
  const photoInfos = [
    { src: 'https://s2.loli.net/2025/04/20/ncJgkM8vfHei6Qz.jpg', caption: "Del Valle Regional Park" },
    { src: 'https://s2.loli.net/2025/04/20/yJjhKrUDgBdR9zm.jpg', caption: "Del Valle Regional Park" },
    { src: 'https://s2.loli.net/2025/04/20/vto981nQWe4GxHa.jpg', caption: "Slackers Hill" },
    { src: 'https://s2.loli.net/2025/04/20/6s8Hv4IyVapOdFr.jpg', caption: "Old St. Hilary's Landmark" },
    { src: 'https://s2.loli.net/2025/04/20/nF83zVtQ4up5WRL.jpg', caption: "The Museum of Fine Arts, Houston" },
    { src: 'https://s2.loli.net/2025/04/20/ZlfRV7SADnq6QuL.jpg', caption: "Pit Room, Houston" },
    { src: 'https://s2.loli.net/2025/04/21/4BUEkKiSwJxaGdu.jpg', caption: "San Francisco" },
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
    <div className="home-container">
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