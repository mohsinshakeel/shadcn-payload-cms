import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { tasksUrl } from '@/configs/constants'
import { TaskFormValues } from '@/modules/tasks/common/TaskForm'
import { Status } from '@/types'

export const useCreateTask = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const createTask = async (values: TaskFormValues) => {
    const formData = {
      ...values,
      status: Status.PENDING,
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push(tasksUrl)
      } else {
        console.error('Failed to create task')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { createTask, isLoading }
}
