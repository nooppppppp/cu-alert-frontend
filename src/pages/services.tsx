import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MapIcon from "../../public/img/Earth-Globe.svg"
import WarnIcon from "../../public/img/Warning-Triangle.svg"
import LineIcon from "../../public/img/line-icon.png"

const Services: NextPage = () => {
  return (
    <div className='flex justify-center min-h-screen w-full font-montserrat'>
        <div className='flex justify-center items-center w-full min-h-screen flex-col max-w-screen-lg space-y-20'>
            <h1 className='font-bold text-5xl text-[#645B5B]'>Welcome, please select</h1>
            <div className='grid grid-cols-2 gap-20 w-full max-w-screen-md'>
                <Link href="/">
                    <a className='duration-300 hover:scale-[102%] w-full h-48 shadow-service-box rounded-xl space-y-3 grid place-content-center text-center font-semibold text-xl'>
                        <div className='relative aspect-square w-20'>
                            <Image src={MapIcon} layout="fill" objectFit='contain' />
                        </div>
                        <p>Map</p>
                    </a>
                </Link>
                <Link href="/report">
                    <a className='duration-300 hover:scale-[102%] w-full h-48 shadow-service-box rounded-xl space-y-3 grid place-content-center text-center font-semibold text-xl'>
                        <div className='relative aspect-square w-20'>
                            <Image src={WarnIcon} layout="fill" objectFit='contain' />
                        </div>
                        <p>Report</p>
                    </a>
                </Link>
            </div>
            <a href="https://lin.ee/1SyLd4S" target="_blank" rel="norefferer" className='flex items-center px-14 py-3 space-x-4 bg-[#F4B4FE] text-white rounded-lg font-semibold'>
                <div className='relative aspect-square w-6'>
                    <Image src={LineIcon} layout="fill" objectFit='contain' />
                </div>
                <span>Add our line to get notified</span>
            </a>
        </div>
    </div>
  )
}

export default Services
