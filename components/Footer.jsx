import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import { face } from '../public/face.svg'
// import { insta } from '../public/insta.svg'
// import { tele } from '../public/tele.svg'
// import { you } from '../public/you.svg'
// import { twit } from '../public/twit.svg'

import { getCategories } from '../services'

const Footer = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((res) => setCategories(res))
  }, [])
  return (
    <div className='container mx-auto px-10 mb-6  '>
      <div className='border-t w-full inline-block border-blue-300 py-8 mb-1 bg-white text-black rounded-md'>
        <div className='md:float-left block mx-10'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-2xl   '>
              Blog CMS
            </span>
          </Link>
        </div>
        <div>
          <div className='flex justify-end text-center mb-4 mx-10 '>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className=' md:float-end mt-2 align-middle  ml-4 font-semibold cursor-pointer'>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='text-white text-sm flex justify-center  border-t-2'>
        <p className='mt-6'>© 2022 Company, Inc</p>
      </div>
    </div>
  )
}

export default Footer
