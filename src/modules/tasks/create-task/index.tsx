// pages/tasks/CreateTask.tsx
'use client'
import { useRouter } from 'next/navigation'

import React from 'react'
import { ArrowLeftIcon } from 'lucide-react'

import AppLayout from '@/layouts/AppLayout'
import { tasksUrl } from '@/configs/constants'

import TaskForm from '../common/TaskForm'
import { useCreateTask } from '@/hooks/useCreateTask'

const CreateTask: React.FC = () => {
  const { createTask, isLoading } = useCreateTask()
  const router = useRouter()

  return (
    <AppLayout title="Tasks" showAddButton={false}>
      <div className="mt-16 flex flex-col w-full">
        <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={() => router.push(tasksUrl)} />
        <TaskForm onSubmit={createTask} isLoading={isLoading} />
      </div>
    </AppLayout>
  )
}

export default CreateTask
