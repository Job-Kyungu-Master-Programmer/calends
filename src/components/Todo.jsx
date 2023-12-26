import { RiDeleteBin6Line } from "react-icons/ri";
import { FcHighPriority } from "react-icons/fc";
import { TbTargetArrow } from "react-icons/tb";




const Todo = ( { todos, onDelete, onImportant, changeShow } ) => {
  return (
    <div className='todo'>
       {changeShow.map(item => 
        <div className="todo__item" key={item.id}>
          <span className="todo__content">{item.title}</span>
           <div className="todo__btns">
            <button className="todo__btn" onClick={() => onImportant(item.id)}>
               { item.important ? <del><TbTargetArrow/> Done</del> : <span><FcHighPriority/> In progress</span> }
             </button>
           <button className="todo__btn" onClick={() => onDelete(item.id)}>
              <RiDeleteBin6Line />
           </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Todo