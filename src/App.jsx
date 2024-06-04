import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'


function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish Progate React Course',
            complated: false,
        },
        {
            id: 2,
            title: 'Have Lucnh With Guru Domba',
            complated: false,
        },
        {
            id: 3,
            title: 'Study React With Ninja Ken',
            complated: false,
        }
    ])

    console.log(todos)

    return (
        <div>
            <h1>My Todo List</h1>
            <Todos todos={todos} />
        </div>
    )
}

export default App;
