import React from 'react'

import TopNavbar from './Components/TopNavbar'

interface INavbar {
  title: string
  showAddButton?: boolean
}

function Navbar({ title, ...rest }: INavbar) {
  return (
    <div className="flex w-full overflow-hidden ">
      <div className="flex flex-col w-full min-h-[220px] ">
        <TopNavbar title={title} {...rest} />
      </div>
      {/* add left side bar */}
    </div>
  )
}

export default Navbar
