import NavbarCenter from '@/components/molecules/NavbarCenter'
import NavbarLeft from '@/components/molecules/NavbarLeft'
import NavbarRight from '@/components/molecules/NavbarRight'
import React from 'react'

const Navbar = ({onClickNavbar} : {onClickNavbar: () => void}) => {
  return (
    <div className='bg-black z-10 flex justify-between p-3 sticky top-0'>
      <NavbarLeft onClickNavbar={onClickNavbar} />
      <NavbarCenter />
      <NavbarRight />
    </div>
  )
}

export default Navbar