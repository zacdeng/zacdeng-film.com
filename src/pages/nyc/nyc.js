import { useState } from 'react';
import useDevice from '../../hooks/useDevice.js'
import "./nyc.css"

function NewYorkCity() {
  const photoInfos_horizonal = [
    { src: 'https://files.seeusercontent.com/2026/06/29/wC5a/May-14-2026-DSCF4781.jpg', caption: 'Central Park' },
    { src: 'https://files.seeusercontent.com/2026/06/29/H6hc/May-17-2026-DSCF4873.jpg', caption: 'The Edge' },
    { src: 'https://files.seeusercontent.com/2026/06/29/v3Ua/May-17-2026-DSCF4962.jpg', caption: 'Staten Island Ferry' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4Qjd/November-24-2025-DSCF3908.jpg', caption: 'Top of the Rock' },

    { src: 'https://files.seeusercontent.com/2026/06/29/0Sve/May-14-2026-DSCF4725.jpg', caption: 'Manhattan Bridge' },
    { src: 'https://files.seeusercontent.com/2026/06/30/guI7/May-17-2026-DSCF4824.jpg', caption: 'Brooklyn Bridge Park' },
    { src: 'https://files.seeusercontent.com/2026/06/30/Id4q/January-25-2026-DSCF4144.jpg', caption: 'Top of the Rock' },
    { src: 'https://files.seeusercontent.com/2026/06/30/rC4j/May-14-2026-DSCF4771.jpg', caption: 'West Village' },
    
    { src: 'https://files.seeusercontent.com/2026/06/30/dnR1/May-17-2026-DSCF4840.jpg', caption: 'TWA' },
    { src: 'https://files.seeusercontent.com/2026/06/30/jA7e/May-17-2026-DSCF4961.jpg', caption: 'Staten Island Ferry' },
    { src: 'https://files.seeusercontent.com/2026/06/30/D0wn/November-24-2025-DSCF3870.jpg', caption: 'Chinatown' },
    { src: 'https://files.seeusercontent.com/2026/06/30/lO2l/November-24-2025-DSCF3877.jpg', caption: 'Manhattan Bridge' },

    { src: 'https://files.seeusercontent.com/2026/06/30/Yq2x/November-24-2025-DSCF3952.jpg', caption: 'Time Square' },
    { src: 'https://files.seeusercontent.com/2026/06/30/Bbe0/November-24-2025-DSCF3996.jpg', caption: 'Top of the Rock' },
    { src: 'https://files.seeusercontent.com/2026/06/30/fC0z/May-14-2026-DSCF4695.jpg', caption: 'Chinatown' },
    { src: 'https://files.seeusercontent.com/2026/06/30/2irC/May-14-2026-DSCF4780.jpg', caption: 'Central Park' },

    { src: 'https://files.seeusercontent.com/2026/06/30/yzG2/November-24-2025-DSCF3906.jpg', caption: 'Top of the Rock' },
    { src: 'https://files.seeusercontent.com/2026/06/30/9krP/November-24-2025-DSCF3929.jpg', caption: 'Dumbo' },
    { src: 'https://files.seeusercontent.com/2026/06/30/1ibP/November-24-2025-DSCF3946.jpg', caption: 'Manhattan' },
    { src: 'https://files.seeusercontent.com/2026/06/30/Kwf2/May-17-2026-DSCF4830.jpg', caption: 'TWA' },
  ];

  const photoInfos_vertical = [
    { src: 'https://files.seeusercontent.com/2026/06/29/4Idm/May-14-2026-DSCF4778.jpg', caption: 'West Village' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4kpQ/May-14-2026-DSCF4756.jpg', caption: 'Grand Central Terminal' },
    { src: 'https://files.seeusercontent.com/2026/06/30/Q7gb/May-14-2026-DSCF4758.jpg', caption: 'Grand Central Terminal' },
    { src: 'https://files.seeusercontent.com/2026/06/29/7Txi/November-24-2025-DSCF3872.jpg', caption: 'Chinatown' },

    { src: 'https://files.seeusercontent.com/2026/06/30/hy1D/May-17-2026-DSCF4986-2.jpg', caption: 'Chinatown' },
    { src: 'https://files.seeusercontent.com/2026/06/30/d6Rq/May-14-2026-DSCF4634.jpg', caption: 'The Edge' },
    { src: 'https://files.seeusercontent.com/2026/06/30/f0sQ/May-14-2026-DSCF4591.jpg', caption: 'Time Square' },
    { src: 'https://files.seeusercontent.com/2026/06/30/maS1/May-17-2026-DSCF4990.jpg', caption: 'Chinatown' },
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
    <div className={isMobile ? 'mobile-nyc-wrapper' : 'desktop-nyc-wrapper'}>
      <div className="nyc-grid">
        <div className="nyc-info">
          <h3>The NYC Between Frames <img src="https://s2.loli.net/2025/04/28/dk2YijFWgtMDnUZ.png" width="28px" alt="instant"/> </h3>
          <p>New York has a rhythm unlike anywhere else, loud, restless, and endlessly changing. 
            Through the gentle grain of 35mm film, I found myself slowing down in a city that never asks anyone to. 
            From quiet mornings beneath blooming cherry trees to the glow of Manhattan after sunset, every frame became a small pause in the middle of its constant motion.</p>

          <p>Shooting on 35mm here was both exhilarating and demanding. Every roll was limited, every exposure deliberate. 
            With my Contax in hand, I wandered without a destination, letting unexpected light, fleeting gestures, and ordinary streets reveal themselves naturally. 
            Film encouraged me to observe before pressing the shutter, reminding me that the best photographs are often the ones you never planned to take.</p>

          <p>New York wears a different face every hour. Warm evening light reflects across the East River, ferries drift quietly beneath the skyline, and strangers become silhouettes against windows filled with fading daylight. 
            Film preserves these moments with a softness that digital rarely imitates, imperfect, textured, and wonderfully alive.</p>

          <p>This collection isn't meant to document the city as it is. It's a record of how it felt to walk through it: one roll at a time, one street at a time, carrying a camera and letting New York unfold on its own.</p>
        </div>
        <div className="nyc-gallery-container">
          <div className="nyc-gallery-scroll">
            {
              photoInfos_horizonal.map((photoUrl, index) => (
                <div className="nyc-photo-wrapper" key={index + 'h'}> 
                  <img 
                    key={index + 'h'} 
                    src={photoUrl.src}
                    alt={`Gallery ${index}`}
                    className={`nyc-gallery-image-h ${hoveredIndex === (index + 'h') ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 'h')}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="nyc-photo-caption">{photoUrl.caption}</div>
                </div>
              ))
            }
          </div>
          <div className="nyc-gallery-scroll">
            {
              photoInfos_vertical.map((photoInfo, index) => (
                <div className="nyc-photo-wrapper" key={index + 'v'}> 
                  <img 
                    key={index + 'v'} 
                    src={photoInfo.src}
                    alt={`Gallery ${index}`}
                    className={`nyc-gallery-image-v ${hoveredIndex === (index + 'v') ? 'scaled' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index + 'v')}
                    onMouseLeave={handleMouseLeave}
                  />
                  <div className="nyc-photo-caption">{photoInfo.caption}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewYorkCity