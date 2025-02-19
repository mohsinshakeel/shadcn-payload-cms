'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { ArrowLeftIcon } from 'lucide-react'

import AppLayout from '@/layouts/AppLayout'
import { tasksUrl } from '@/configs/constants'
import { createTaskAction } from '@actions'

import TaskForm, { TaskFormValues } from '../common/TaskForm'

export default function Task() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleGoBack = () => {
    router.push(tasksUrl)
  }

  const handleSubmit = async (values: TaskFormValues) => {
    setIsLoading(true)
    createTaskAction(values)
      .then(() => {
        router.push(tasksUrl)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <AppLayout title="Tasks" showAddButton={false}>
      <div className="mt-16 flex flex-col w-full">
        <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={handleGoBack} />
        <TaskForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </AppLayout>
  )
}
