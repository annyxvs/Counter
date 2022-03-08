import { ReactNode } from "react";
import '../components/style/style.css'

const Header = () =>{
  return(
    <header className="header">
      <div className="logo">Counter</div>
      <nav className="nav">
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#" className="conta"><span>creat an acoont?</span></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header