import Link from 'next/Link'
import React from 'react'

import { ArrowLeftIcon } from 'lucide-react'

import AppLayout from '@/layouts/AppLayout'
import { tasksUrl } from '@/configs/constants'
import { createTaskAction } from '@actions'

import TaskForm from '../common/TaskForm'

const CreateTask: React.FC = () => {
  return (
    <AppLayout title="Tasks" showAddButton={false}>
      <div className="mt-16 flex flex-col w-full">
        <Link href={tasksUrl}>
          <ArrowLeftIcon className="w-6 h-6 cursor-pointer" />
        </Link>
        <TaskForm onSubmit={createTaskAction} isLoading={false} />
      </div>
    </AppLayout>
  )
}

export default CreateTask
