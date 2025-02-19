import React from 'react'

import AppLayout from '@/layouts/AppLayout'
import { getTaskAction } from '@/app/actions/taskActions'

import NotFoundWithLoading from './components/NotFound'
import Task from './components/Task'

export default async function ViewTask({ taskId }: { taskId?: string }) {
  const task = await getTaskAction(taskId)

  if (!task) {
    return <NotFoundWithLoading />
  }

  return (
    <AppLayout title="View Task" showAddButton={false}>
      <Task task={task} />
    </AppLayout>
  )
}
