import "./hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <ul>
          <li>
            <a href="mailto:xzaiver.wolfinbarger@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#7ed321" }}
                className="social envelope"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/xwolfinbarger/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#7ed321" }}
                className="social linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Wolfinbarger">
              <FontAwesomeIcon
                icon={faSquareGithub}
                style={{ color: "#7ed321" }}
                className="social github"
              />
            </a>
          </li>
        </ul>
        <div>
          <h1>Hi, I'm X'Zaiver</h1>
          <h3> Fullstack Developer</h3>
          <p>
            I'm a web developer based in the USA. I enjoy building fullstack
            applications with React and Rails.
          </p>
          {/* <a href="#/about" className="about-me">
            About Me
          </a> */}
        </div>
      </div>
    </>
  );
}
