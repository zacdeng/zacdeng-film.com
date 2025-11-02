import { useState } from 'react';
import "./desert-light.css"

function DesertLight() {
  const photoUrls = [
    { src: "https://s2.loli.net/2025/10/30/vY37FW2dnCTV89N.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/okUAyJ3pZBaSIn8.jpg", caption: "Bryce Canyon, Utah" },
    { src: "https://s2.loli.net/2025/10/30/hUAE9wTxuSB7cMD.jpg", caption: "Capitol Reef, Utah" },
    { src: "https://s2.loli.net/2025/10/30/2yCdWu6BqD8jl94.jpg", caption: "Capitol Reef, Utah" },

    { src: "https://s2.loli.net/2025/10/30/pKZ1ntXuvQ82lY4.jpg", caption: "Bryce Canyon, Utah" },
    { src: "https://s2.loli.net/2025/10/30/cxLNqFahzytMf3A.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/yXbLjQongvr5EiZ.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/tHlSE31Ofx5sA8g.jpg", caption: "Canyonlands, Utah" },

    { src: "https://s2.loli.net/2025/10/31/agx5F7cSXNqoeHm.jpg", caption: "Utah" },
    { src: "https://s2.loli.net/2025/10/30/4aXmqu2IlBFifGQ.jpg", caption: "Canyonlands, Utah" },
    { src: "https://s2.loli.net/2025/10/30/XDZRC6dnTI2mWGE.jpg", caption: "Bryce Canyon, Utah" },
    { src: "https://s2.loli.net/2025/10/30/KIm6fosOUrYlXun.jpg", caption: "Bryce Canyon, Utah" },

    
    { src: "https://s2.loli.net/2025/10/30/4SLmrONbs7zgnWi.jpg", caption: "Canyonlands, Utah" },    
    { src: "https://s2.loli.net/2025/10/31/nZk7tGicw1uNfFR.jpg", caption: "Utah" },
    { src: "https://s2.loli.net/2025/10/31/BHVcX9tZDg5OGNl.jpg", caption: "Utah" },
    { src: "https://s2.loli.net/2025/10/31/GwA75T1XjK3WmtE.jpg", caption: "Utah" },
    
    { src: "https://s2.loli.net/2025/10/31/Mp9dQwrEAsD2kBX.jpg", caption: "Utah" },
    { src: "https://s2.loli.net/2025/10/31/9LV2fDHjZ5lTJaC.jpg", caption: "Utah" },
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
    <div className="utah-container">
      <div className="utah-grid">
        <div className="utah-info">
          <h3>Desert Light in Frames <img src="https://s2.loli.net/2025/04/28/dk2YijFWgtMDnUZ.png" width="28px" alt="instant"/> </h3>
          <p>This chapter is a quiet tribute to the red rocks and vast skies of Utah — captured through the gentle lens of 35mm film. 
            From the wind-shaped walls of Capitol Reef to the silent spires of Bryce Canyon, each frame was taken slowly, deliberately, 
            with my Contax in hand and sand in my boots.</p>

          <p>Shooting on 35mm with my Contax G1 in the desert taught me the beauty of patience. 
            The rangefinder's precision and the 36-shot roll nudged me to compose more thoughtfully — waiting for the desert light to soften, or for a shadow to fall just right. 
            Each shutter click carried more weight. With the Contax's sharp Zeiss glass and compact frame, I moved lightly but saw deeply — letting the camera fade away so the landscape could speak.</p>

          <p>The textures of film echo the texture of these lands — rough, golden, ancient. The softness of grain matches the softness of morning light. 
            These aren't just images; they're impressions, quiet records of the way the West felt beneath my feet.</p>

          <p>Out here, nothing moves quickly. That's the pace I wanted to honor. That's the spirit I tried to keep in every frame.</p>
        </div>
        <div className="utah-gallery-container">
          {
            photoUrls.map((photoUrl, index) => (
              <div className="utah-gallery-photo" key={index}> 
                <img 
                  key={index} 
                  src={photoUrl.src}
                  alt={`Gallery ${index}`}
                  className={`utah-gallery-image ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
                <div className="utah-photo-caption">{photoUrl.caption}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DesertLight