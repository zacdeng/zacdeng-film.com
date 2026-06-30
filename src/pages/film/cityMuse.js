import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./cityMuse.css";

function CityMuse() {
  const photoInfos_horizonal = [
    { src: 'https://files.seeusercontent.com/2026/06/29/wC5a/May-14-2026-DSCF4781.jpg', caption: 'Central Park, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/H6hc/May-17-2026-DSCF4873.jpg', caption: 'The Edge, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/v3Ua/May-17-2026-DSCF4962.jpg', caption: 'Staten Island Ferry, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/3gvQ/June-23-2026-DSCF5088.jpg', caption: 'Summer Fair, West Chicago' },
    { src: 'https://files.seeusercontent.com/2026/06/30/8Lkx/March-29-2026-DSCF4408-2.jpg', caption: 'Downtown, Chicago' },
    { src: 'https://files.seeusercontent.com/2026/06/30/ai3C/May-10-2026-DSCF4551.jpg', caption: 'North Ave Beach, Chicago' },

    { src: 'https://files.seeusercontent.com/2026/06/30/1Nzc/000189130036.jpg', caption: 'Slackers Hill, San Francisco' },
    { src: 'https://files.seeusercontent.com/2026/06/30/og1M/DSCF3588-2.jpg', caption: 'Twin Peak, San Francisco' },
    { src: 'https://files.seeusercontent.com/2026/06/30/Bbe0/November-24-2025-DSCF3996.jpg', caption: 'Top of the Rock' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4Qjd/November-24-2025-DSCF3908.jpg', caption: 'Top of the Rock, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/0Sve/May-14-2026-DSCF4725.jpg', caption: 'Manhattan Bridge, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/guI7/May-17-2026-DSCF4824.jpg', caption: 'Brooklyn Bridge Park, New York' },

    { src: 'https://files.seeusercontent.com/2026/06/30/Id4q/January-25-2026-DSCF4144.jpg', caption: 'Top of the Rock, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/rC4j/May-14-2026-DSCF4771.jpg', caption: 'West Village, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/dnR1/May-17-2026-DSCF4840.jpg', caption: 'TWA, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/Yq2x/November-24-2025-DSCF3952.jpg', caption: 'Time Square, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/yzG2/November-24-2025-DSCF3906.jpg', caption: 'Top of the Rock, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/30/D0wn/November-24-2025-DSCF3870.jpg', caption: 'Chinatown, New York' },
  ];

  const photoInfos_vertical = [
    { src: 'https://files.seeusercontent.com/2026/06/29/4Idm/May-14-2026-DSCF4778.jpg', caption: 'West Village, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4kpQ/May-14-2026-DSCF4756.jpg', caption: 'Grand Central Terminal, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/7Txi/November-24-2025-DSCF3872.jpg', caption: 'Chinatown, New York' },
    { src: 'https://s2.loli.net/2025/05/23/Li3spDufVR58yTz.jpg', caption: "Columbus Ave, San Francisco" },
    { src: 'https://s2.loli.net/2025/05/23/RaeDBMnv9P2Yhjp.jpg', caption: "Fort Mason, San Francisco" },
    { src: 'https://s2.loli.net/2025/04/20/ZlfRV7SADnq6QuL.jpg', caption: "Pit Room, Houston" },
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
    <div className={isMobile ? 'mobile-cityMuse-wrapper' : 'desktop-cityMuse-wrapper'}>
      <div className="cityMuse-grid">
        <div className="cityMuse-gallery-container">
          <div className="cityMuse-gallery-scroll">
            {
              photoInfos_horizonal.map((photoInfo, index) => (
                <div className="cityMuse-photo-wrapper" key={index + 'h'}> 
                  <img 
                    key={index + 'h'} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`cityMuse-gallery-image-h ${hoveredIndex === (index + 'h') ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 'h')}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="cityMuse-photo-caption">{photoInfo.caption}</div>
                </div>
              ))
            }
          </div>
          <div className="cityMuse-gallery-scroll">
            {
              photoInfos_vertical.map((photoInfo, index) => (
                <div className="cityMuse-photo-wrapper" key={index + 'v'}> 
                  <img 
                    key={index + 'v'} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`cityMuse-gallery-image-v ${hoveredIndex === (index + 'v') ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 'v')}
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