import { Plus } from 'lucide-react'
import styles from './newtask.module.css'
import { FormEvent, useState } from 'react'

interface NewTaskProps {
    setTasks: (content: any) => void
    tasks: any
}

export function NewTask({ setTasks, tasks }: NewTaskProps) {
    const [newTaskText, setNewTaskText] = useState('')
    
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks([...tasks, {
            id: tasks.length + 1,
            text: newTaskText,
            isChecked: false
        }])

        setNewTaskText('')
    }
    
    return (
        <form onSubmit={handleCreateNewTask} className={styles.task}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={event => setNewTaskText(event.target.value)}
                value={newTaskText}
            />

            <button type="submit">
                Criar
                <Plus size='1.5rem' />
            </button>
        </form>
    )
}