import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Base from "./components/Base/Base";


const App = () => {
    const [title, setTitle] = useState('')
    const [show, setShow] = useState(true)
    const [todos, setTodos] = useState([])
    const [errors, setErrors] = useState(null)
    const [success, setSuccess] = useState(null)

    useEffect(() => {
        Base.getAll().then(returned => {
            setTodos(returned)
        })
    },[])

    const onDelete = id => {
        const todDel = todos.filter(t => t.id !== id)
       Base.delet(id,todDel).then(returned => {
            setTodos(todos.map(t => t.id !== id ? t : returned))
            setTodos(todos.filter(t => t.id !== id))
        })
        .catch(error => {
            setErrors('Error server !')
            setTimeout(() => {
                setErrors(null)
            }, 2000);
        })
        .finally(succ => {
           setErrors('Remove !')
            setTimeout(() => {
              setErrors(null)
          }, 2000);
        })
    }

    const onImportance = id => {
        const todId = todos.find(t => t.id === id)
        const changeTodId = {...todId, important : !todId.important}
        Base.update(id,changeTodId).then(returned => {
            setTodos(todos.map(t => t.id !== id ? t : returned))
        }) 
    }

    const addTodo = (event) => {
        event.preventDefault()
        const todTabs = {
            title: title,
            important : Math.random() < 0.5,
            id: todos.length + 1
        }
       Base.create(todTabs).then(returned => {
            setTodos(todos.concat(returned))
            setTitle('')
        })
        .finally(suces => {
            setSuccess(`Well added course`)
            setTimeout(() => {
                setSuccess(null)
            },2000)
        })
    }

    const changeShow = show ? todos : todos.filter(t => t.important === true)

    return (
         <div className="app">
            <Header errors={errors} sucess={success} />
             <div className="container">
                <h1 className="app__title">Create Course</h1>
                <Banner todos={todos} show={show} setShow={setShow} /> 
                <Todo todos={todos} onDelete={onDelete} onImportant={onImportance} changeShow={changeShow} />
                <div className="pop">
                    <h2 className="form__title">Create your Task</h2>
                    <form onSubmit={addTodo} className="form">
                       <input value={title} onChange={(e) => setTitle(e.target.value)} className="form__input" placeholder="course" />
                        <button className="form__btn">add Task</button>
                    </form> 
                </div>
             </div>
         </div>
    )
}

export default App;