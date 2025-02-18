export enum Status {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

export interface ITask {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  color: string
  status: Status
}

export interface ITaskResponse {
  docs: ITask[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}
