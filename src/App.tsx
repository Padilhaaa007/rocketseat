import { Header } from './components/Header'
import './global.css'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import { TasksList } from './components/TasksList'
import { useState } from 'react'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.container}>
        <NewTask
          setTasks={setTasks}
          tasks={tasks}
        />

        <TasksList
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  )
}

export default App
