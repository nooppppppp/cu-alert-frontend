import type { NextPage } from 'next'
import Link from 'next/link'
import Image from "next/image"
import { useState } from 'react'
import AuthImage from "../../public/img/auth-image.png"
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>("")
  const [number, setNumber] = useState<string>("")

  const login = () => {
    console.log("Email", email)
    console.log("Phone number", number)

    router.push("/services")
  }

  return (
    <div className='flex justify-center bg-white'>
      <div className='min-h-screen w-full max-w-screen-lg grid grid-cols-2 font-montserrat'>
        <div className='flex flex-col items-center justify-center h-full '>
          <Image src={AuthImage} />
          <p className='font-medium text-2xl text-center text-[#000000]'>We notify you whenever there is any <br />
          suspious act around Chulalongkorn </p>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <div>
            <h1 className='font-medium text-3xl text-[#645B5B] mb-6 pl-3'>Sign in</h1>
            <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none px-6 py-3 rounded-lg bg-[#E9E9E9] w-72' placeholder='Email' />
              <br />
              <input value={number} onChange={(e) => setNumber(e.target.value)} className='outline-none px-6 py-3 rounded-lg bg-[#E9E9E9] w-72' placeholder='Phone number' />
              <br />
              <div className='flex justify-center'>
                <button onClick={() => login()} className='bg-[#E9ADEB] rounded-full text-white px-8 py-2'>Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
