import { getAllTasksAction } from '@/app/actions/taskActions'
import { Status } from '@/types'
import AppLayout from '@/layouts/AppLayout'

import NoData from './components/NoData'
import TaskList from './components/TasksLists'

export default async function ListTasks() {
  const { docs: tasks } = await getAllTasksAction()

  if (!tasks.length) {
    return (
      <AppLayout title="Tasks" showAddButton>
        <NoData isFetching={false} />
      </AppLayout>
    )
  }

  return (
    <AppLayout title="Tasks" showAddButton>
      <div className="mt-20 flex flex-col items-center w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold text-primary">Tasks</h1>
            <span className="text-xs bg-border text-foreground font-bold rounded-xl px-3 py-1">
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold text-secondary ">Completed</h1>
            <span className="text-xs bg-border text-foreground font-bold rounded-xl px-2 py-1">
              {tasks.filter((task) => task.status === Status.COMPLETED).length} &nbsp;of&nbsp;{' '}
              {tasks.length}
            </span>
          </div>
        </div>

        <TaskList tasks={tasks} />
      </div>
    </AppLayout>
  )
}
