import React from 'react'
import { IoLogoDesignernews } from "react-icons/io5";
import Errors from './Errors';
import Succes from './Succes';


const Header = ( {errors, sucess} ) => {
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__logo">
               <IoLogoDesignernews />
            </div>
            <Errors error={errors} />
            <Succes success={sucess} />
            <div className="user">
                <div className="user__name">Jeancy Dalos</div>
                <button className="user__logout">Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Header