import Image from 'next/image'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Report: NextPage = () => {
    const router = useRouter()

    const [faculty, setFaculty] = useState<string>("")
    const [place, setPlace] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [details, setDetails] = useState<string>("")
    const [sex, setSex] = useState<string>("")
    const [appearance, setAppearance] = useState<string>("")
    
  
    const submit = () => {
      console.log("faculty", faculty)
      console.log("place details", place)
      console.log("category", category)
      console.log("details", details)
      console.log("sex", sex)
      console.log("appearance", appearance)

      router.push("/thankyou")
    }

    return (
        <div className='flex justify-center min-h-screen w-full font-montserrat'>
        <div className='flex justify-center items-center w-full min-h-screen flex-col max-w-screen-lg space-y-10 mb-16'>
            <h1 className='font-bold text-6xl text-[#EAADEB] mt-14'>Report</h1>
                <div>
                    <h2 className='font-semibold text-2xl text-[#645B5B] mb-5 pl-0'>Where?</h2>
                    <form className='space-y-5' onSubmit={(e) => e.preventDefault()}>
                        <h2 className='font-medium text-xl text-[#645B5B] mb-0 pl-1'>Faculty</h2>
                        <select value={faculty} onChange={(e) => setFaculty(e.target.value)} className=' outline-none px-3 py-2 rounded-lg bg-[#E9E9E9] w-[500px]'>
                            <option selected>Choose a faculty</option>
                            <option value="Faculty of Engineering">Faculty of Engineering</option>
                            <option value="Faculty of Allied Health Sciences">Faculty of Allied Health Sciences</option>
                            <option value="Faculty of Architecture">Faculty of Architecture</option>
                            <option value="Faculty of Arts">Faculty of Arts</option>
                            <option value="Faculty of Commerce and Accountancy">Faculty of Commerce and Accountancy</option>
                            <option value="Faculty of Communication Arts">Faculty of Communication Arts</option>
                            <option value="Faculty of Dentistry">Faculty of Dentistry</option>
                            <option value="Faculty of Psychology">Faculty of Psychology</option>
                            <option value="Faculty of Economics">Faculty of Economics</option>
                            <option value="Faculty of Education">Faculty of Education</option>
                            <option value="Faculty of Fine and Applied Arts">Faculty of Fine and Applied Arts</option>
                            <option value="Faculty of Law">Faculty of Law</option>
                            <option value="Faculty of Medicine">Faculty of Medicine</option>
                            <option value="Faculty of Nursing">Faculty of Nursing</option>
                            <option value="Faculty of Pharmaceutical Sciences">Faculty of Pharmaceutical Sciences</option>
                            <option value="Faculty of Political Science">Faculty of Political Science</option>
                            <option value="Faculty of Science">Faculty of Science</option>
                            <option value="Faculty of Sports Science">Faculty of Sports Science</option>
                            <option value="Faculty of Veterinary Science">Faculty of Veterinary Science</option>
                            <option value="School of Integrated Innovation">School of Integrated Innovation</option>
                            <option value="School of Agricultural Resources">School of Agricultural Resources</option>
                        </select>
                        <h2 className='font-medium text-xl text-[#645B5B] mb-0 pl-1'>Place Details</h2>
                        <textarea value={place} onChange={(e) => setPlace(e.target.value)} className='outline-none px-3 py-2 rounded-lg bg-[#E9E9E9] w-[600px]' />
                        <br />

                        <h2 className='font-semibold text-2xl text-[#645B5B] mb-5 pl-0'>What?</h2>
                        <h2 className='font-medium text-xl text-[#645B5B] mb-0 pl-1'>Category</h2>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className=' outline-none px-3 py-2 rounded-lg bg-[#E9E9E9] w-[300px]'>
                            <option selected>Choose a category</option>
                            <option value="Robbery">Roberry</option>
                            <option value="Stalking">Stalking</option>
                            <option value="Violence">Violence</option>
                            <option value="Harassment">Harassment</option>
                            <option value="Scammer">Scammer</option>
                        </select>
                        <h2 className='font-medium text-xl text-[#645B5B] mb-0 pl-1'>Details</h2>
                        <textarea value={details} onChange={(e) => setDetails(e.target.value)} className='outline-none px-3 py-2 rounded-lg bg-[#E9E9E9] w-[600px]' />
                        <br />

                        <h2 className='font-semibold text-2xl text-[#645B5B] mb-5 pl-0'>Who?</h2>
                        <h2 className='font-medium text-xl text-[#645B5B] mb-0 pl-1'>Sex</h2>
                        <select value={sex} onChange={(e) => setSex(e.target.value)} className=' outline-none px-3 py-1 rounded-lg bg-[#E9E9E9] w-[200px]' >
                            <option selected>Choose sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <h2 className='font-medium text-xl text-[#645B5B] mb-0 pl-1'>Appearance</h2>
                        <textarea value={appearance} onChange={(e) => setAppearance(e.target.value)} className='outline-none px-3 py-2 rounded-lg bg-[#E9E9E9] w-[600px]' />
                        <br />

                        <div className='flex justify-end space-x-6'>
                            <Link href="/services">
                            <button className='bg-[#DDDDDD] rounded-full text-white px-8 py-2'>Cancel</button>
                            </Link>
                            <button onClick={() => submit()} className='bg-[#E9ADEB] rounded-full text-white px-8 py-2'>Submit</button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    )
}

export default Report