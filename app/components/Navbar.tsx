import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='mx-auto my-6 w-325 flex items-center justify-between'>
          <h1>My WebSite</h1>
      <nav className='flex items-center gap-5'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/contacts'}>contacts</Link>
      </nav>
      <button>Login</button>
    </div>
    </>
  )
}

export default Navbar
