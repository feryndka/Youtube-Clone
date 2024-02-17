import NavbarCenter from '@/components/molecules/NavbarCenter'
import NavbarLeft from '@/components/molecules/NavbarLeft'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-3'>
      <NavbarLeft />
      <NavbarCenter />
      <div>SignIn Button</div>
    </div>
  )
}

export default Navbar