import { ReactNode } from 'react'

import { cn } from '@/lib/cn'

import Navbar from '../components/Navbar/Navbar'

interface AppLayoutProps {
  children: ReactNode
  title: string
  showAddButton?: boolean
}

const AppLayout = (props: AppLayoutProps) => {
  const { children, ...rest } = props
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar {...rest} />
      <div className={cn('flex flex-col overflow-none my-10 w-3/6 self-center')}>{children}</div>
    </div>
  )
}

export default AppLayout
