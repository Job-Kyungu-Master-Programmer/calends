import { MdErrorOutline } from "react-icons/md";
{/* <GrStatusGood /> */}

const Errors = ( { error } ) => {
  if(error === null) {
     return null
  }
  return (
    <div className="error header__response">
     <MdErrorOutline /> <span>{error}</span>
     <strong></strong>
    </div>
  )
}

export default Errors