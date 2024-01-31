import { auth } from '@/auth'
import { getUsersForSidebar } from '@/lib/data'
import React from 'react'
import Chat from './Chat'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const Chats = async () => {
  const session = await auth();
  await sleep(1500); // Функция сна для проверки работы стриминга
  const chats = session?.user ? await getUsersForSidebar(session.user._id) : [];

  return (
    <nav className='flex-1 overflow-y-auto'>
      <ul>
        {chats.map((chat) => (
          <Chat key={chat._id} chat={chat}/>
        ))}
      </ul>
    </nav>
  )
}
