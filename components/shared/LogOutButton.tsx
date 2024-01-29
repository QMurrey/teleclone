import React from 'react'
import { Button } from '@/components/ui/Button';
import { LogOut } from 'lucide-react';
import { logOutAction } from '@/lib/actions';

export const LogOutButton = () => {

  return (
    <form action={logOutAction}>
      <Button className='bg-black rounded-full p-3 text-xs md:text-sm'>
        <LogOut className='cursor-pointer'/>
      </Button>
    </form>
  )
}