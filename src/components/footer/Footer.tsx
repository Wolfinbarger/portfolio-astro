import "./footer.scss";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
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
    </footer>
  );
}
