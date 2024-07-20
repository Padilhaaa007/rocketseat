import styles from './taskslist.module.css'

import Clipboard from '../assets/clipboard.svg'
import { Task } from './Task'
import { ITask } from '../App'

interface TasksListProps {
    tasks: {
        id: number
        text: string
        isChecked: boolean
    }[]
    setTasks: any
}

export function TasksList({ tasks, setTasks }: TasksListProps) {
    function deleteTask(taskIdToDelete: number) {
        console.log(taskIdToDelete)

        const filteredTasks = tasks.filter((task) => task.id !== taskIdToDelete)

        setTasks(filteredTasks)
    }

    function toggleTaskStatus(taskIdToToggle: number, status: boolean) {
        let updatedTasks: any[] = []
        tasks.map((task: any) => {
            let newTask = {
                id: task.id,
                text: task.text,
                isChecked: !status
            }

            task.id === taskIdToToggle ? updatedTasks.push(newTask) : updatedTasks.push(task)
        })

        setTasks(updatedTasks)
    }

    const completedTasksLength = tasks.filter((prevTasks) => {
        if(prevTasks.isChecked === true) {
            return prevTasks
        }
    }).length

    return (
        <div className={styles.tasks}>
            <section className={styles.tasksInfo}>
                <span className={styles.createdTasks}>
                    Tarefas criadas
                    <b>{tasks.length}</b>
                </span>
                <span className={styles.completedTasks}>
                    Concluídas
                    <b>{tasks.length > 0 ? `${completedTasksLength} de ${tasks.length}` : '0' }</b>
                </span>
            </section>

            {tasks.length === 0 ? (
                <main className={styles.emptyTasks}>
                    <img src={Clipboard} />
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </main>
            ) : (
                <main className={styles.tasks}>
                    {tasks.map((task: ITask) => {
                        return (
                            <Task
                                toggleTaskStatus={toggleTaskStatus}
                                deleteTask={deleteTask}
                                id={task?.id}
                                text={task?.text}
                                isChecked={task?.isChecked}
                            />
                        )
                    })}
                </main>
            )}
        </div>
    )
}