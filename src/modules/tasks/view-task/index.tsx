'use client'

import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'

import AppLayout from '@/layouts/AppLayout'

import { tasksUrl } from '@/configs/constants'

import { useGetTask } from '@/hooks/useGetTask'
import { useUpdateTask } from '@/hooks/useUpdateTask'

import TaskForm, { TaskFormValues } from '../common/TaskForm'

import NotFoundWithLoading from './components/NotFound'

const ViewTask: React.FC = () => {
  const router = useRouter()
  const { id } = useParams()

  const { isLoading, task, error } = useGetTask()
  const { updateTask } = useUpdateTask()

  const handleSubmit = (values: TaskFormValues) => {
    if (!id) {
      return
    }
    updateTask(id as string, values).then(() => {
      router.push(tasksUrl)
    })
  }

  const handleGoBack = () => {
    router.push(tasksUrl)
  }

  return (
    <AppLayout title="View Task" showAddButton={false}>
      <div className="mt-16 flex flex-col w-full">
        <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={handleGoBack} />
        {!id || error || isLoading ? (
          <NotFoundWithLoading isLoading={isLoading} />
        ) : (
          <TaskForm initialValues={task} onSubmit={handleSubmit} isLoading={isLoading} />
        )}
      </div>
    </AppLayout>
  )
}

export default ViewTask
