import { useState, useEffect } from 'react'
import { ITask, ITaskResponse } from '@/types'

export const useListTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchTasks = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/tasks')
      if (response.ok) {
        const data: ITaskResponse = await response.json()
        setTasks(data.docs)
      } else {
        console.error('Failed to fetch tasks')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return { tasks, isLoading, refetchTasks: fetchTasks }
}
