import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";


const Notes = ( { pub, likes, deletes } ) => {
   return (
    <div className='notes'>
        {pub.map(item => 
         <div className="notes__item" key={item.id}>
            <div className="notes__name">{item.title}</div>
            <div className="notes__text">
                <div className="notes__head">
                    <span className="notes__span">{item.hours}: {item.minutes}</span>
                    <span className="notes__span">{item.days}.{item.months}.{item.years}</span>
                </div>
                <span className="notes__content">{item.content}</span>
                <div className="notes__bottom">
                   <div className="notes__bottom__left">
                   <span onClick={() => deletes(item.id)} className="notes__btn notes__delete"><AiOutlineDelete /></span>
                    <span onClick={() => likes(item.id)} className="notes__btn notes__like"><AiOutlineLike /> {item.like} </span>
                   </div>
                   <div className="notes__bottom__right">
                     <span className="notes__author">Author:</span>
                   </div>
                </div>
            </div>
          </div>    
        )}
    </div>
  )
}

export default Notes