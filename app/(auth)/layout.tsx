// layout общий для login и signup,
// но чтобы не превращать путь из /login в /auth/login
// (auth) берётся в скобки и потому игнорируется при постройке маршрута
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
  // children в данном случае означает страницы login и signup
  return (
    <div className='bg-gradient-to-br from-slate-950 to-slate-800'>
      <div className='bg-auth-layout flex flex-col items-center justify-center min-h-screen text-gray-200'>
			  <div className='p-8 bg-slate-900 rounded-lg shadow-md min-w-80'>
			  	<Link href={"/"} className='flex justify-center mb-4'>
			  		<Image src={"/logo.svg"} width={40} height={40} alt='Teleclone logo'/>
			  	</Link>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout