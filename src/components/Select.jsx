import React from 'react'

const Select = ( {user} ) => {
  return (
    <div className='select'>
        <select className='select__item' name="">
            {user.map(user => 
              <option value="jeancy">{user.name}, {user.mail}</option> 
             )}
        </select>
    </div>
  )
}

export default Select