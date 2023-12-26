import { TbMessage2Check } from "react-icons/tb";
import { TbSettingsCog } from "react-icons/tb";


const Banner = ( { todos, show, setShow } ) => {
  return (
    <div className='banner'>
        <div className="banner__container">
            <div className="banner__btns">
                <div className={show ? "banner__btn" : "btnActive" } 
                onClick={() => setShow(!show)} >
                    {show ? "All courses" : "Done passed"}
                </div>
            </div>
            <div className="banner__icons">
                <div className="span banner__icon">
                    <TbMessage2Check />
                    <span>{todos.length}</span>
                </div>  
                <div className="span banner__icon">
                    <TbSettingsCog />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner