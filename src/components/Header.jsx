import React from 'react'
import { IoLogoDesignernews } from "react-icons/io5";

const Header = () => {
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__logo">
               <IoLogoDesignernews />
            </div>
            <div className="header__response">
                Vous avez bien ete connecter a votre compte , merci
            </div>
            <div className="user">
                <div className="user__name">Jeancy Dalos</div>
                <button className="user__logout">Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Header