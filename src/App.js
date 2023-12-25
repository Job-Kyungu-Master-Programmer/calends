import Banner from "./components/Banner";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { BsPlusLg } from "react-icons/bs";


const App = () => {
    return (
         <div className="app">
            <Header />
             <div className="container">
                <h1 className="app__title">Create Course</h1>
                <Banner /> 
                <Todo />
                <div className="pop">
                    <h2 className="form__title">Create your Task</h2>
                    <form className="form">
                       <input className="form__input" />
                        <button className="form__btn">add Task</button>
                    </form> 
                </div>
             </div>
         </div>
    )
}

export default App;