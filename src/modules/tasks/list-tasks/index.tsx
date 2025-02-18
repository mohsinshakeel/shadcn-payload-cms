'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import AppLayout from '@/layouts/AppLayout'
import { useListTasks } from '@/hooks/useListTasks'

import { ITask, Status } from '@/types'
import { tasksUrl } from '@/configs/constants'

import NoData from './components/NoData'
import Card from './components/Card'
import { useUpdateTask } from '@/hooks/useUpdateTask'
import { useDeleteTask } from '@/hooks/useDeleteTask'

const ListTasks: React.FC = () => {
  const router = useRouter()

  const { tasks: data, isLoading, refetchTasks } = useListTasks()
  const { updateTask } = useUpdateTask()
  const { deleteTask } = useDeleteTask()

  const handleToggleCompleted = async (task: ITask) => {
    const value = task.status === Status.COMPLETED
    await updateTask(task.id, { status: value === true ? Status.PENDING : Status.COMPLETED }).then(
      async () => {
        await refetchTasks()
      },
    )
  }

  const handleDelete = async (id: string) => {
    await deleteTask(id).then(async () => {
      await refetchTasks()
    })
  }

  const handleAddTask = () => {
    router.push(`${tasksUrl}/create`)
  }

  const handleCardClick = (id: string) => {
    router.push(`${tasksUrl}/view/${id}`)
  }

  if (isLoading) {
    return (
      <AppLayout title="Tasks" showAddButton onClickAddButton={handleAddTask}>
        <NoData isFetching={true} />
      </AppLayout>
    )
  }

  if (!data || data.length === 0) {
    return (
      <AppLayout title="Tasks" showAddButton onClickAddButton={handleAddTask}>
        <NoData isFetching={false} />
      </AppLayout>
    )
  }

  return (
    <AppLayout title="Tasks" showAddButton onClickAddButton={handleAddTask}>
      <div className="mt-20 flex flex-col items-center w-full ">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold text-primary">Tasks</h1>
            <span className="text-xs bg-border text-foreground font-bold rounded-xl px-3 py-1">
              {data?.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold text-secondary ">Completed</h1>
            <span className="text-xs bg-border text-foreground font-bold rounded-xl px-2 py-1">
              {data.filter((task: ITask) => task.status === Status.COMPLETED).length}
              &nbsp;of&nbsp;
              {data.length}
            </span>
          </div>
        </div>
        {data.length === 0 || isLoading ? (
          <NoData isFetching={isLoading} />
        ) : (
          <>
            {data?.map((task: ITask) => (
              <Card
                key={task.id}
                title={task.title}
                onToggleCompleted={() => handleToggleCompleted(task)}
                onDelete={() => handleDelete(task.id)}
                isCompleted={task.status === Status.COMPLETED}
                onClickCard={() => handleCardClick(task.id)}
              />
            ))}
          </>
        )}
      </div>
    </AppLayout>
  )
}

export default ListTasks
