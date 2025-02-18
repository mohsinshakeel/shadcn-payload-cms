import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { TaskFormValues } from '@/modules/tasks/common/TaskForm'
import { ITask } from '@/types'

export const useGetTask = () => {
  const [task, setTask] = useState<TaskFormValues | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const { id } = useParams()

  useEffect(() => {
    if (!id) return

    const fetchTask = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/tasks/${id}`)
        if (response.ok) {
          const data: ITask = await response.json()
          setTask(data)
        } else {
          console.error('Failed to fetch task')
          setError('Failed to fetch task')
        }
      } catch (error) {
        console.error('An error occurred:', error)
        setError('Failed to fetch task')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTask()
  }, [id])

  return { task, isLoading, error }
}
