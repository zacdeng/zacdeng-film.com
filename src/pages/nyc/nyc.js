import { useState } from 'react';
import "./nyc.css"

function NewYorkCity() {
  const photoUrls = [
    { src: 'https://files.seeusercontent.com/2026/06/29/wC5a/May-14-2026-DSCF4781.jpg', caption: 'Central Park, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/H6hc/May-17-2026-DSCF4873.jpg', caption: 'The Edge, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/v3Ua/May-17-2026-DSCF4962.jpg', caption: 'Staten Island Ferry, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/4Qjd/November-24-2025-DSCF3908.jpg', caption: 'Top of the Rock, New York' },
    { src: 'https://files.seeusercontent.com/2026/06/29/0Sve/May-14-2026-DSCF4725.jpg', caption: 'Manhattan Bridge, New York' },
    // { src: 'https://files.seeusercontent.com/2026/06/29/4Idm/May-14-2026-DSCF4778.jpg', caption: 'West Village, New York' },
    // { src: 'https://files.seeusercontent.com/2026/06/29/4kpQ/May-14-2026-DSCF4756.jpg', caption: 'Grand Central Terminal, New York' },
    // { src: 'https://files.seeusercontent.com/2026/06/29/7Txi/November-24-2025-DSCF3872.jpg', caption: 'Chinatown, New York' },
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
    <div className="nyc-container">
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
          {
            photoUrls.map((photoUrl, index) => (
              <div className="nyc-gallery-photo" key={index}> 
                <img 
                  key={index} 
                  src={photoUrl.src}
                  alt={`Gallery ${index}`}
                  className={`nyc-gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
                <div className="nyc-photo-caption">{photoUrl.caption}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NewYorkCity