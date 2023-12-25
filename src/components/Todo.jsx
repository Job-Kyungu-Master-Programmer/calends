import { RiDeleteBin6Line } from "react-icons/ri";
import { FcHighPriority } from "react-icons/fc";
import { TbTargetArrow } from "react-icons/tb";




const Todo = () => {
  return (
    <div className='todo'>
       <div className="todo__item">
          <span className="todo__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iusto aut pariatur, id et quis officia quos aliquid explicabo voluptas animi blanditiis quas quia ab consequuntur obcaecati. Molestias, hic fugit.</span>
          <div className="todo__btns">
            <button className="todo__btn">
                <FcHighPriority /> <TbTargetArrow />
            </button>
            <button className="todo__btn">
               <RiDeleteBin6Line />
            </button>
         </div>
       </div>
    </div>
  )
}

export default Todo