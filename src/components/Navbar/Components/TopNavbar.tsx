import React from 'react'

import Link from 'next/link'

import { Button } from '@/shadcn/button'
import { AddIcon } from '@/assets/icons'
import NextImage from '@/shadcn/image'

import logo from '@/assets/images/logo.png'

interface ITopNavbar {
  title: string
  showAddButton?: boolean
}

const TopNavbar = ({ showAddButton }: ITopNavbar) => {
  return (
    <div className="h-full bg-black  w-full">
      <div className="w-full h-full flex flex-col items-center justify-center  ">
        <NextImage src={logo} alt="logo" />
        {showAddButton === true && (
          <Link href={'/tasks/create'} className="absolute top-[190px] w-3/6 h-14">
            <Button variant="default" className="w-full h-full">
              <div className="flex items-center gap-2 ">
                <p>Create Task</p>
                <AddIcon className="w-4 h-4" />
              </div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default TopNavbar
