import "./footer.scss";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer id="contact">
      <ul>
        <li>
          <a href="mailto:xzaiver.wolfinbarger@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#7ed321" }}
              className="envelope"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/xwolfinbarger/">
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
    </footer>
  );
}
