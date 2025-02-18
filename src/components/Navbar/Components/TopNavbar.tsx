import React from 'react'

import { Button } from '@/shadcn/button'
import { AddIcon } from '@/assets/icons'
import NextImage from '@/shadcn/image'

import logo from '@/assets/images/logo.png'

interface ITopNavbar {
  title: string
  showAddButton?: boolean
  onClickAddButton?: () => void
}

const TopNavbar = ({ showAddButton, onClickAddButton }: ITopNavbar) => {
  return (
    <div className="h-full bg-black  w-full">
      <div className="w-full h-full flex flex-col items-center justify-center  ">
        <NextImage src={logo} alt="logo" />
        {showAddButton === true && (
          <Button
            onClick={onClickAddButton}
            variant="default"
            className="absolute top-[190px] w-3/6 h-14"
          >
            <div className="flex items-center gap-2 ">
              <p>Create Task</p>
              <AddIcon className="w-4 h-4" />
            </div>
          </Button>
        )}
      </div>
    </div>
  )
}

export default TopNavbar
