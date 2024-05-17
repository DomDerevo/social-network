import React from "react"
import './header.css'
import logo from '../../img/cocacola.png'

function Header(){
    return(
      <div className="header">
        <img src={logo} alt="" />
      </div>
    )
  }

export default Header;