import { useState } from 'react';
import "./mioNova.css"

function MioAndNova() {
  const photoUrlsVertical = [
    'https://s2.loli.net/2025/04/21/He9xKblsRZE8iGn.jpg',
    'https://s2.loli.net/2025/04/21/NutP4DxFrlUIRsk.jpg',
    'https://s2.loli.net/2025/04/21/7fNpk5WtrFSyq1X.jpg',
    'https://s2.loli.net/2025/04/21/m4aPhC1O6ZoKsL7.jpg',
    'https://s2.loli.net/2025/04/21/sTyFADftdI6BN34.jpg',
    'https://s2.loli.net/2025/04/21/H9NhGQXyn6IFAKL.jpg',
    'https://s2.loli.net/2025/04/21/tkKprQaquPC753z.jpg',
    'https://s2.loli.net/2025/04/21/iI6BNrthC8EGMD9.jpg',


    'https://s2.loli.net/2025/04/21/B4v6Ep9sOSjRIFb.jpg',
    'https://s2.loli.net/2025/04/21/wKFdHigybC5hpGs.jpg',
    'https://s2.loli.net/2025/04/21/CtPvWcKLMly5dk2.jpg',
    'https://s2.loli.net/2025/04/21/uZCyUiYOpqKdJoA.jpg',
    'https://s2.loli.net/2025/04/20/DwyOJF8x4qfcXn6.jpg',
    'https://s2.loli.net/2025/04/20/FSgi5CeRJ2pP7xa.jpg',
    'https://s2.loli.net/2025/04/20/cBwUDvs5fMuA38Z.jpg',
    'https://s2.loli.net/2025/04/20/vUyY14a7V8LHJpi.jpg',
  ];

  const photoUrlsHorizonal = [
    'https://s2.loli.net/2025/04/21/sJq6xh428OEFZiy.jpg',
    'https://s2.loli.net/2025/04/21/hbvTYS1arVk8cpj.jpg',
    'https://s2.loli.net/2025/04/21/E51pHhQ6WzFmX82.jpg',
    'https://s2.loli.net/2025/04/21/NWptARDU3bmu9sq.jpg'
  ]

  const [hoveredIndex, setHoveredIndex] = useState("");

  const handleMouseEnter = (index, isVertical) => {
    setTimeout(() => {
      setHoveredIndex(`${index}${isVertical ? '_v' : '_h'}`);
      console.log(hoveredIndex);
    }, 300); // 0.5 second
  };

  const handleMouseLeave = () => {
    setHoveredIndex("");
  };

  return (
    <div className="dog-container">
      <div className="dog-grid">
        <div className="dog-info">
          <h3>Mio and Nova</h3>
          <p>Some of my fondest memories are wrapped up in the everyday moments spent with my two mini dachshunds — both in that rich chocolate and tan coat that somehow makes their personalities shine even more. 
            They're small in size, but their energy and love take up the entire room. Whether it's the way they zoom across the living room like it's their personal racetrack, 
            or how they burrow under blankets until only their noses peek out, they've added warmth and laughter to my life in ways I never imagined.</p>

          <p>I've captured countless photos of them — stretched long like hot dogs on sunny floors, or standing proudly with their tiny legs and big-dog attitudes. 
            But it's the quiet moments I remember most: when they curl up beside me after a long day, or nudge my hand gently just to say “I'm here.” 
            Their loyalty, curiosity, and quirky charm have become a part of my daily rhythm, and every little memory with them — no matter how simple — means everything.</p>

          <p>Mio: born in <i>06/23/2023</i></p>
          <p>Nova: born in <i>07/21/2022</i></p>
        </div>
        
        <div className="dog-gallery-container">
          {
            photoUrlsVertical.map((photoUrl, index) => (
              <div key={index} className="dog-gallery-photo">
                <img 
                  key={index} 
                  src={photoUrl}
                  alt={`Gallery-v ${index}`}
                  className={`dog-gallery-mionova-image-v ${hoveredIndex === index + '_v' ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index, true)}
                  onMouseLeave={handleMouseLeave}
                  loading="lazy"
                />
              </div>
            ))
          }
          {
            photoUrlsHorizonal.map((photoUrl, index) => (
              <div key={index} className="dog-gallery-photo">
                <img 
                  key={index} 
                  src={photoUrl}
                  alt={`Gallery-h ${index}`}
                  className={`dog-gallery-mionova-image-h ${hoveredIndex === (index + '_h') ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index, false)}
                  onMouseLeave={handleMouseLeave}
                  loading="lazy"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MioAndNova