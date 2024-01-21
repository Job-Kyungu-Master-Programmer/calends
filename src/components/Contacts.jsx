import React from 'react'
import ig from '../images/user.jpeg'

const Contacts = ( { user, filters, setFilters } ) => {
  return (
    <div className='utils'>
        {user.filter(us => us.name.toLocaleLowerCase().includes(filters)).map(user => 
         <div className="utils__item" key={user.id}>
            <div className="utils__image">
              <img src={ig} alt="" className="utils__img" />
            </div>
            <span className="utils__connected"></span>
            <div className="utils__text">
               <h2 className="utils__name">{user.name} {user.username}</h2>
               <div className="utils__phone">{user.number}</div>
               <div className="utils__age">{user.age} ans</div>
            </div>
         </div>
         )}
    </div>
  )
}

export default Contacts