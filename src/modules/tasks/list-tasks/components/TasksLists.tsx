'use client'

import { useRouter } from 'next/navigation'

import { updateTaskAction, deleteTaskAction } from '@/app/actions/taskActions'
import { tasksUrl } from '@/configs/constants'
import { ITask, Status } from '@/types'

import Card from './Card'

interface TaskListProps {
  tasks: ITask[]
}

export default function TaskList({ tasks }: TaskListProps) {
  const router = useRouter()
  const handleToggleCompleted = async (task: ITask) => {
    const newStatus = task.status === Status.COMPLETED ? Status.PENDING : Status.COMPLETED
    await updateTaskAction(task.id, { status: newStatus })
  }

  const handleDelete = async (id: string) => {
    await deleteTaskAction(id)
  }

  const handleClickCard = (task: ITask) => {
    router.push(`${tasksUrl}/view/${task.id}`)
  }

  return (
    <>
      {tasks.map((task) => (
        <Card
          key={task.id}
          title={task.title}
          onToggleCompleted={() => handleToggleCompleted(task)}
          onDelete={() => handleDelete(task.id)}
          isCompleted={task.status === Status.COMPLETED}
          onClickCard={() => handleClickCard(task)}
        />
      ))}
    </>
  )
}
