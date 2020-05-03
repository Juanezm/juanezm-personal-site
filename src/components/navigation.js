import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <a href="https://github.com/Juanezm" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
    <a href="https://www.linkedin.com/in/juanezm/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>
    <ThemeChanger/>
  </nav>
  
)