'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { tasksUrl } from '@/configs/constants'
import { updateTaskAction } from '@/app/actions/taskActions'
import { ITask } from '@/types'

import { ArrowLeftIcon } from 'lucide-react'
import TaskForm, { TaskFormValues } from '../../common/TaskForm'

export default function Task({ task }: { task: ITask }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (values: TaskFormValues) => {
    setIsLoading(true)
    updateTaskAction(task.id as string, values)
      .then(() => {
        router.push(tasksUrl)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleGoBack = () => {
    router.push(tasksUrl)
  }

  return (
    <div className="mt-16 flex flex-col w-full">
      <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={handleGoBack} />
      <TaskForm initialValues={task} onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  )
}
