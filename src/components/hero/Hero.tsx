import "./hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <div>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#7ed321" }}
                className="envelope"
                href="xzaiver.wolfinbarger@gmail.com"
              />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#7ed321" }}
                className="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Wolfinbarger">
              <FontAwesomeIcon
                icon={faSquareGithub}
                style={{ color: "#7ed321" }}
                className="github"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Hi, I'm X'Zaiver</h1>
        <p>Fullstack Developer</p>
        <p>
          I'm a web developer based in the USA. I enjoy building fullstack
          applications with React and Rails.
        </p>
        <a href="#/about">About Me</a>
      </div>
      <div>Image</div>
    </>
  );
}
