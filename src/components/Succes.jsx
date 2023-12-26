import React from 'react'
import { GrStatusGood } from "react-icons/gr";

const Succes = ( { success } ) => {
   if(success === null ) {
      return null
   }
  return (
    <div className="header__response">
    <GrStatusGood /> <span>{success}</span>
    <strong></strong>
   </div>
  )
}

export default Succes