import "./header.scss";

import logo from "/favicon.svg?url";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
