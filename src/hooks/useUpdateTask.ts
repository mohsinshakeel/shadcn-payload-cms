import { useState } from 'react'
import { ITask } from '@/types'

export const useUpdateTask = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const updateTask = async (taskId: string, updatedData: Partial<ITask>) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })

      if (!response.ok) {
        console.error('Failed to update task')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { updateTask, isLoading }
}
