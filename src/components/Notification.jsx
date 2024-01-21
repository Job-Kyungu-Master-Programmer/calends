import React from 'react'

const Notification = ({Succes}) => {
  if(Succes === null) {
    return null
  }
  return (
    <div className='not'>
        <h3 className="not__title">Notification </h3>
        <span className="notification">{Succes}</span>
    </div>
  )
}

export default Notification