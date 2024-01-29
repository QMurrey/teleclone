import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { LogOutButton } from './LogOutButton';

export default async function({sessionIsActive}:{sessionIsActive:boolean}) {
  return (
    <header className='w-full py-4 px-8 flex justify-between items-center'>
      <Image src="/logo.svg" width={60} height={60} alt="TeleClone logo" className='cursor-pointer' priority={true}/>
      <div className='flex space-x-1'>
        <Button className='bg-transparent hover:bg-primary/5'>Истории</Button>
        <Button className='bg-transparent hover:bg-primary/5'>Горячее</Button>
        <Button asChild className='bg-transparent hover:bg-primary/5'>
          <Link href={"/chat"}>Чат</Link>
        </Button>
      </div>
      {sessionIsActive ?
        <div className='flex space-x-2'>
          <Button className='bg-black rounded-full p-3 text-xs md:text-sm'>Смотреть гайд</Button>
          <LogOutButton/>
        </div>
        : <></>
      }
    </header>
  )
}