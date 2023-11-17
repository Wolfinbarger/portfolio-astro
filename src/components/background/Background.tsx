import "./background.scss";

import {useState} from "react";
import BackgroundItems from "./BackgroundItem";
import { Education, Experience } from "./Data";

export default function Background() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {setToggleState(index)};
  return ()
}
