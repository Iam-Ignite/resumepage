import "./index.css";
import image from "./image/profile.jpg";
import hng from "./image/hng.png";
import i4g from "./image/i4g.png";
import zuri from "./image/zuri.png";

function App() {
  return (
    <div className="App">
    <div className="main-container">
      <div className="content content-1">
        <div className="iterms profile">
          <img src={image} alt="" className="profile-pic" />
          <div className="box"></div>
          <h3>Web Developer</h3>
          <span>Design | Build | Test | Deploy</span>
        </div>
        <div className="iterms">
          <div className="list-itm">
            <li>
              Country: <span className="list">Nigeria</span>
            </li>
            <li>
              Location: <span className="list">Lagos,Lekki</span>
            </li>
            <li>
              Phone No.: <span className="list">08050768489</span>
            </li>
          </div>

          <div className="line"></div>

        <div className="skills">
           <h6>HTML5</h6>
          <div className="status stat-1"></div>
          <h6>CSS3</h6>
          <div className="status stat-2"></div>
          <h6>SASS</h6>
          <div className="status stat-3"></div>
          <h6>JAVASCRIPT</h6>
          <div className="status stat-4"></div>
          <h6>REACTJS</h6>
          <div className="status stat-5"></div>
          <h6>BOOSTRAP</h6>
          <div className="status stat-6"></div>
          <h6>JQUERY</h6>
          <div className="status stat-7"></div>
          <h6>FIGMA</h6>
          <div className="status stat-8"></div>
        </div>

          <div className="line"></div>

          <i className="fas fa-check"></i>
          <span>@freecodecamp</span>
          <br />
          <i className="fas fa-check"></i>
          <span>@udemy</span>
          <br />
          <i className="fas fa-check"></i>
          <span>@sololearn</span>

          <div className="footer">
            <span>Follow me</span> <br />
            <br />
            <a href="https://web.facebook.com/Mula.feels.9/">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://github.com/Iam-Ignite">
              <i className="fab fa-github-square"></i>
            </a>
            <i className="fab fa-instagram-square"></i>
            <a href="https://www.linkedin.com/in/faith-godwin-163a48213/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="content content-2">
      <button className="btn">menu</button>

        <div className="iterms item-2">
          <div className="headline">
            <h2>
              I’m Faith Godwin. <br />
              Web Developer/Software Engineer. Based in Nigeria.
            </h2>
            <button>About Me</button>
          </div>
          <div className="links">
            <a href="https://internship.zuri.team/">
              <div className="link">
                {" "}
                <img src={hng} alt="logo" />
                <img src={zuri} alt="logo" />
                <img src={i4g} alt="logo" />
              </div>
            </a>
            <div className="link">
              <h1>
                {" "}
                <a href="https://internship.zuri.team/">
                  Join HNGi8 x I4G for free internship sponsor by
                  internship.zuri.team{" "}
                </a>{" "}
              </h1>
            </div>
          </div>
          <div className="sub-head">
            <h3> I am a Front-end Web Developer from Nigeria</h3>
            <p>
              I am Faith Godwin ~(@Iam-Ignite) a software engineering
              enthusiast driven by knowledge, accuracy and excellence who
              would like to put my software development skills to use in the
              community, passion for research, innovation and integration.
            </p>
          </div>
          <div className="sub-head">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              perspiciatis ea eveniet hic, veniam recusandae laboriosam sed
              totam doloremque minus quod aperiam labore necessitatibus
              veritatis, quibusdam ab obcaecati reprehenderit et!
            </p>
          </div>
          <div className="sub-head">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              perspiciatis ea eveniet hic, veniam recusandae laboriosam sed
            
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
