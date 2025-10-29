import "./about.css"

function About() {
  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="about-info">
          <h3>About Me <img src="https://s2.loli.net/2025/04/28/pwgiB4FhSxlXKLk.png" width="25px" alt="icon" /> </h3>
          <p><b>ZACH DENG</b> / based on Bay Area</p>
          <p>Photographer | Software Engineer</p>
          <p>You can find me at IG @zacdeng.film / 小红书 @瞎按快門 (ID: 497539155)</p>
          <p>For inquires, please contact:</p>

          <div className="links">
            <p>
              <img src="https://i.loli.net/2020/07/19/B4sGYjqAmCTVxgb.png" width="20px" alt="email"/> 
              <a href="mailto:zacdeng0720@email.com"><i>zacdeng0720@gmail.com</i></a>
            </p>
            <p>
              <img src="https://s2.loli.net/2022/06/03/Orq1ki4lMd2bDyo.png" width="20px" alt="ig"/> 
              <a href="https://www.instagram.com/zacdeng.film/"><i>@zacdeng.film</i></a>
            </p>
            <p>
              <img src="https://s2.loli.net/2025/04/20/nDgN7pZmxetS1PQ.png" width="20px" alt="rednotes"/> 
              <a href="https://www.xiaohongshu.com/user/profile/5df4a5420000000001001e59"><i>@瞎按快門</i></a>
            </p>
          </div>
          
          <p className="equipment"><b>EQUIPMENTS</b></p>
          <p><img src="https://s2.loli.net/2025/04/28/VWNFnxY5d12eBkH.png" width="25px" alt="rollei" />Rollei 35s</p>
          <p><img src="https://s2.loli.net/2025/04/28/Zt2VX9ieAgcUEoO.png" width="25px" alt="bronica" />Bronica SQA</p>
          <p><img src="https://s2.loli.net/2025/05/21/9lO3dvGxmoj4Mzq.png" width="25px" alt="bronica" />Mamiya 645 1000s</p>
          <p><img src="https://s2.loli.net/2025/04/28/NrCFDVEMRijPW8S.png" width="25px" alt="fujifilm" />Fujifilm xs20</p>
          <p><img src="https://s2.loli.net/2025/04/28/zKGpHCcJMLnaTfD.png" width="25px" alt="instant" />Fujifilm Instax Wide 300 / Mini 90</p>
        </div>
        
        <div className="about-photo">
          <img src="https://s2.loli.net/2025/04/20/pDzFT7rOjv6nlc4.jpg" alt="portfolio" />
        </div>
      </div>
    </div>




  );
}

export default About