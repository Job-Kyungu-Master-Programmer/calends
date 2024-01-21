import React from 'react'

const Errors = ({ msgError }) => {
  if(msgError === null) {
    return null
  }
  return (
    <div className='not'>
        <h3 className="not__title">Errors </h3>
        <span className="notificationError">{msgError}</span>
    </div>
  )
}

export default Errors