import React from 'react'
import Header from './Header'
import ig from '../images/user.jpeg'
const Dashboard = () => {
  return (
    <div className='dash'>
         <div className="dash__head">
            <div className="dash__user">
                <div className="dash__image">
                    <img src={ig} alt="" className="dash__img" />
                </div>
                <div className="dashb__text">
                  <h3 className="dash__name">Jeancy Dalos</h3>
                  <button className="dash__logout">logout</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Dashboard