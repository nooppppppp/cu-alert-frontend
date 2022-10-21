import type { NextPage } from 'next'
import Link from 'next/link'

const Thankyou: NextPage = () => {
    return(
        <div className='flex justify-center min-h-screen w-full font-montserrat'>
        <div className='flex justify-center items-center w-full min-h-screen flex-col max-w-screen-lg space-y-20'>
            <h1 className='font-bold text-5xl text-[#645B5B]'>Thank you for submitting the form!</h1>
            <div className='flex justify-end space-x-10'>
            <Link href="/services">
                <button className='text-lg bg-[#E9ADEB] rounded-full text-white px-10 py-3'>Home</button>
            </Link>
            <Link href="/report">
                <button className='text-lg bg-[#E9ADEB] rounded-full text-white px-10 py-3'>Report again</button>
            </Link>
            </div>
        </div>
        </div>
    )

}

export default Thankyou