import "./about.css"

function About() {
  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="about-info">
          <h3>About Me</h3>
          <p><b>ZACH DENG</b> / based on Bay Area</p>
          <p>Photographer | Software Engineer</p>
          <p>You can find me at IG @zacdeng.film / 小红书 @瞎按快門 (ID: 497539155)</p>
          <p>For inquires, please contact:</p>

          <div className="links">
            <p>
              <img src="https://i.loli.net/2020/07/19/B4sGYjqAmCTVxgb.png" width="20px" alt="email"/> 
              <a href="mailto:zacdeng0720@email.com">zacdeng0720@gmail.com</a>
            </p>
            <p>
              <img src="https://s2.loli.net/2022/06/03/Orq1ki4lMd2bDyo.png" width="20px" alt="ig"/> 
              <a href="https://www.instagram.com/zacdeng.film/">@zacdeng.film</a>
            </p>
            <p>
              <img src="https://s2.loli.net/2025/04/20/nDgN7pZmxetS1PQ.png" width="20px" alt="rednotes"/> 
              <a href="https://www.xiaohongshu.com/user/profile/5df4a5420000000001001e59">@瞎按快門</a>
            </p>
          </div>
          
          <p className='equipment'><b>EQUIPMENTS</b></p>
          <p>Rollei 35 s</p>
          <p>Bronica SQA</p>
          <p>Fujifilm xs20</p>
          <p>Fujifilm Instax Wide 300 / Mini 90</p>
        </div>
        
        <div className="about-photo">
          <img src="https://s2.loli.net/2025/04/20/pDzFT7rOjv6nlc4.jpg" alt="portfolio" />
        </div>
      </div>
    </div>
  );
}

export default About