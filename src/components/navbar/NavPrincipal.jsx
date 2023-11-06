import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const NavPrincipal = () => {
  const {userId} = auth()
  console.log("UserId",userId);
  
  return (
    <>
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between mb-5">
      <div className="flex items-center">
        <Link href={"/"}>
          <div className="text-lg uppercase font-bold text-white">
            previleyAPP
          </div>
        </Link>
      </div>
      <div className="text-white flex items-center">
        {!userId && (
          <>
           <Link href={"/sign-in"} className='text-gray-200 hover:text-white mr-4'>sing-in</Link>
        <Link href={"/sign-up"} className='text-gray-200 hover:text-white mr-4'>sing-up</Link>
          </>
        )}
       <div className="ml-auto">
        <UserButton afterSignOutUrl='/'/>
       </div>
      </div>
    </nav>
    </>
  )
}

export default NavPrincipal