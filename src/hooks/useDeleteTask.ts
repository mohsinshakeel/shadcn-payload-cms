import { useState } from 'react'

export const useDeleteTask = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const deleteTask = async (taskId: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        console.error('Failed to delete task')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { deleteTask, isLoading }
}
