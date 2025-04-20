import { useState } from 'react';
import "./instant.css"

function Instant() {
  const horizontalPhotoUrls = [

  ];

  const verticalPhotoUrls = [

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
    <div className="instant-container">
      <div className="instant-grid">
        <div className="instant-info">
          <h3>Instant Archive</h3>
          <p>This collection is all about the little moments — the kind you can't plan or edit. I've always loved instant film because it feels honest. 
            You get one shot, and whatever comes out is what you keep. It's imperfect, sometimes messy, but that's what makes it special.</p>

          <p>These photos were taken during everyday life: my cute dog Mio, time with friends, weekend trips, or just things that caught my eye. 
            There's something nice about not overthinking it — just seeing something, snapping the photo, and letting it be.</p>

          <p>I started shooting instant film as a way to slow down. With everything moving so fast, it's a reminder to pay attention and appreciate small details. 
            The way the light falls, the weird colors, the blur — it all adds to the story. 
            Every photo here means something to me, even if it's just how I felt in that moment.</p>
        </div>
        
        <div className="instant-gallery-container">
          <div className="gallery-vertical">
            {
              horizontalPhotoUrls.map((photoUrl, index) => (
                <img 
                  key={index} 
                  src={photoUrl}
                  alt={`Gallery Horizontal ${index}`}
                  className={`gallery-image-horizontal ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            }
          </div>

          <div className="gallery-horizontal">
            {
              verticalPhotoUrls.map((photoUrl, index) => (
                <img 
                  key={index} 
                  src={photoUrl}
                  alt={`Gallery Vertical ${index}`}
                  className={`gallery-image-vertical ${hoveredIndex === index ? 'scaled' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instant