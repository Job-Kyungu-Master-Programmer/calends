import { TbMessage2Check } from "react-icons/tb";
import { TbSettingsCog } from "react-icons/tb";


const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner__container">
            <div className="banner__btns">
                <div className="banner__btn">important</div>
                <div className="banner__btn">non important</div>
            </div>
            <div className="banner__icons">
                <div className="span banner__icon">
                    <TbMessage2Check />
                    <span>20</span>
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