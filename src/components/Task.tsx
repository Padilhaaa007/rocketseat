import { Circle, CircleCheck, Trash2 } from "lucide-react";

import styles from './task.module.css'

export interface TaskProps {
    id: number
    text: string
    isChecked: boolean
    deleteTask: (id: number) => void
    toggleTaskStatus: (id: number, status: boolean) => void
  }

export function Task({ id, text, isChecked, deleteTask, toggleTaskStatus }: TaskProps) {

    function handleDeleteTask() {
        deleteTask(id)
    }

    function handleToggleTaskStatus() {
        toggleTaskStatus(id, isChecked)
    }

    return (
        <div className={isChecked ? `${styles.completedTask} ${styles.task}` : styles.task}>
            {isChecked ? <CircleCheck onClick={handleToggleTaskStatus} className={styles.taskIsChecked} /> : <Circle onClick={handleToggleTaskStatus} size='1.5rem' /> }
            <p>{text}</p>
            <Trash2 onClick={handleDeleteTask} size='1.5rem' className={styles.taskDelete} />
        </div>
    )
}