'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { TaskFormValues } from '@/modules/tasks/common/TaskForm'
import { ITask, ITaskResponse, Status } from '@/types'
import { BASE_URL } from '@/configs/constants'

const TASKS_URL = `${BASE_URL}/tasks`

export async function createTaskAction(values: TaskFormValues) {
  const formData = {
    ...values,
    status: Status.PENDING,
  }
  try {
    await fetch(TASKS_URL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('An error occurred:', error)
  }

  revalidatePath('/tasks')
  redirect('/tasks')
}

export async function getAllTasksAction(): Promise<ITaskResponse> {
  try {
    const response = await fetch(TASKS_URL, { next: { revalidate: 600 } })
    return await response.json()
  } catch (error) {
    return { docs: [] } as unknown as ITaskResponse
  }
}

export async function getTaskAction(taskId?: string) {
  try {
    const response = await fetch(`${TASKS_URL}/${taskId}`, { cache: 'no-store' })
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch task:', error)
    return null
  }
}

export async function updateTaskAction(taskId: string, updatedData: Partial<ITask>) {
  try {
    await fetch(`${TASKS_URL}/${taskId}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedData),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Failed to update task:', error)
  }

  revalidatePath('/tasks')
}

export async function deleteTaskAction(taskId: string) {
  try {
    await fetch(`${TASKS_URL}/${taskId}`, { method: 'DELETE' })
  } catch (error) {
    console.error('Failed to delete task:', error)
  }

  revalidatePath('/tasks')
}
