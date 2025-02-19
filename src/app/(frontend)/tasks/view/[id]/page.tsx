import { ViewTask } from '@/modules'
import NotFoundWithLoading from '@/modules/tasks/view-task/components/NotFound'

export default async function ViewTaskPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!id) {
    return <NotFoundWithLoading />
  }

  return <ViewTask taskId={id} />
}
